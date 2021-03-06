import { action, computed, thunk } from 'easy-peasy';
import { IndexPath } from '@ui-kitten/components';
import to from 'await-to-js';

import { ToastService, TransactionService, NavigationService } from 'services';
import { orderObject, getOrderObject } from './utils';

const LIMIT = 5;

export default {
  // State
  currentIndex: new IndexPath(0),
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

  // Actions

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

  setIndex: action((state, payload) => {
    state.currentIndex = new IndexPath(payload);
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

  // Side Effects

  getItems: thunk(async (actions, payload) => {

    const { status, isRefresh } = payload;

    isRefresh
      ? actions.setRefreshingByStatus({ isRefreshing: true, status })
      : actions.setLoadingByStatus({ isLoading: true, status });

    const [error, data] = await to(TransactionService.getOrders(status, 1, LIMIT));

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

    const [error, data] = await to(TransactionService.getOrders(status, page, LIMIT));

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