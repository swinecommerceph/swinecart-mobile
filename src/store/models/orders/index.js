import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { IndexPath } from '@ui-kitten/components';

import { ToastService, OrderService } from 'services';
import { orderMapper } from 'utils/mappers/responseMappers';
import { orderObject, getOrderObject } from './utils';

const LIMIT = 5;

const prevStatus = {
  'reserved': 'requested',
  'onDelivery': 'reserved',
  'sold': 'onDelivery',
};

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

  updateStatus: action((state, payload) => {
    const { status, product, reservation } = orderMapper(payload);

    if (getOrderObject(state, prevStatus[status]).items) {
      getOrderObject(state, prevStatus[status]).items = getOrderObject(state, prevStatus[status]).items.filter(p => {
        if (prevStatus[status] === 'requested') {
          return p.product.id !== product.id;
        }
        else {
          return p.reservation.id !== reservation.id;
        }
      });
    }

    if (getOrderObject(state, status).items) {
      getOrderObject(state, status).items.unshift({ status, product, reservation });
    }
  }),

  removeItem: action((state, payload) => {

    const { reservationId, status } = payload;

    if (getOrderObject(state, status).items) {
      getOrderObject(state, status).items = getOrderObject(state, status).items.filter(p => {
        return p.reservation.id !== reservationId;
      });
    }
  }),

  setOrders: action((state, payload) => {
    const { items, status, page } = payload;

    getOrderObject(state, status).items= items;
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
  getOrdersByStatus: thunk(async (actions, payload) => {

    const { status, isRefresh } = payload;

    isRefresh
      ? actions.setRefreshingByStatus({ isRefreshing: true, status })
      : actions.setLoadingByStatus({ isLoading: true, status });

    const [error, data] = await to(OrderService.getOrders(status, 1, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {

      const { orders } = data.data;

      if (orders && orders.length > 0) {
        const transformedData = orders.map(orderMapper);
        actions.setOrders({
          items: [...transformedData],
          status,
          page: 2
        });
      }
      else {
        actions.setOrders({
          items: [],
          status,
          page: 1
        });
      }
    }

    isRefresh
      ? actions.setRefreshingByStatus({ isRefreshing: false, status })
      : actions.setLoadingByStatus({ isLoading: false, status });

  }),

  getMoreOrdersByStatus: thunk(async (actions, payload, { getStoreState }) => {

    const { status } = payload;
    const { items, page } = getOrderObject(getStoreState().orders, status);

    actions.setLoadingMoreByStatus({ isLoadingMore: true, status });

    const [error, data] = await to(OrderService.getOrders(status, page, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {

      const { orders: moreOrders } = data.data;

      if (moreOrders && moreOrders.length > 0) {
        const transformedData = moreOrders.map(orderMapper);
  
        actions.setOrders({
          items: [...items, ...transformedData],
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