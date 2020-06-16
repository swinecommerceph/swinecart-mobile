import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import routes from 'constants/routes';
import { ToastService, TransactionService, NavigationService } from 'services';
import { orderObject, getOrderObject } from './utils';

const LIMIT = 5;

export default {
  // State
  currentStatus: routes[0],
  isRequestingItem: false, 
  ordersById: {

  },
  ordersByStatus: {
    requested: {
      ...orderObject,
    },
    reserved: {
      ...orderObject
    },
    onDelivery: {
      ...orderObject
    },
    sold: {
      ...orderObject
    },

  },

  // Computed Values
  status: computed(state => () => routes.find(status => status.key === state.currentStatus.key)),

  // Actions

  updateStatus: action((state, payload) => {

  }),

  addItem: action((state, payload) => {

    const { item, status } = payload;

    if (!getOrderObject(state, status).items) {
      getOrderObject(state, status).items = [];
    }
    getOrderObject(state, status).items.unshift(item);

  }),

  removeItem: action((state, payload) => {

    const { id, status } = payload;

    if (getOrderObject(state, status).items) {
      getOrderObject(state, status).items = getOrderObject(state, status).items.filter(p => {
        return p.id !== id;
      });
    }
  }),

  setItems: action((state, payload) => {
    const { items, status, page } = payload;
    getOrderObject(state, status).items = items;
    getOrderObject(state, status).page = page;
  }),

  setCurrentStatus: action((state, payload) => {
    state.currentStatus = payload;
  }),

  setLoadingMoreByStatus: action((state, payload) => {
    const { isLoadingMore, status } = payload;
    getOrderObject(state, status).isLoadingMore = isLoadingMore;
  }),

  setRefreshingByStatus: action((state, payload) => {
    const { isRefreshing, status } = payload;
    getOrderObject(state, status).isRefreshing = isRefreshing;
  }),

  setLoadingByStatus: action((state, payload) => {
    const { isLoading, status } = payload;
    getOrderObject(state, status).isLoading = isLoading;
  }),

  setErrorByStatus: action((state, payload) => {
    const { hasError, status } = payload;
    getOrderObject(state, status).hasError = hasError;
  }),

  setIsRequestingItem: action((state, payload) => {
    state.isRequestingItem = payload;
  }),

  // Side Effects

  requestItem: thunk(async (actions, payload, { getStoreActions }) => {

    actions.setIsRequestingItem(true);

    const { removeItem: removeCartItem } = getStoreActions().cart;

    const { 
      cartItemId, type, currentQuantity, currentDate, currentRequest 
    } = payload;

    const requestData = {
      requestQuantity: type === 'semen' ? currentQuantity : 1,
      dateNeeded: type === 'semen' ? currentDate : '',
      specialRequest: currentRequest
    };

    const [error, data] = await to(TransactionService.requestItem(cartItemId, requestData));

    if (error) {
      ToastService.show('Please try again later!', null);
    }

    else {

      const { item } = data.data;

      ToastService.show('Successfully requested the product!', () => {
        // actions.addItem({ item, status: 'requested' });
        removeCartItem(cartItemId);
        actions.getItems({ status: 'requested', isRefresh: true });
        actions.setIsRequestingItem(false);
        NavigationService.back();
      });
    }

  }),

  getItems: thunk(async (actions, payload) => {

    const { status, isRefresh } = payload;

    isRefresh
      ? actions.setRefreshingByStatus({ isRefreshing: true, status })
      : actions.setLoadingByStatus({ isLoading: true, status });

    const [error, data] = await to(TransactionService.getItems(status, 1, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {

      const { items } = data.data;

      actions.setItems({
        items,
        status,
        page: 2
      });
    }

    isRefresh
      ? actions.setRefreshingByStatus({ isRefreshing: false, status })
      : actions.setLoadingByStatus({ isLoading: false, status });

  }),


  getMoreItems: thunk(async (actions, payload, { getState }) => {

    const { status } = payload;
    const { items, page } = getOrderObject(getState(), status);

    actions.setLoadingMoreByStatus({ isLoadingMore: true, status });

    const [error, data] = await to(TransactionService.getItems(status, page, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { items: moreItems } = data.data;

      if (moreItems && moreItems.length > 0) {
        actions.setItems({
          items: [...items, ...moreItems],
          status,
          page: page + 1
        })
      }
      else {
        ToastService.show('No more orders to load!', null);
      }
    }

    actions.setLoadingMoreByStatus({ isLoadingMore: false, status });

  }),

};