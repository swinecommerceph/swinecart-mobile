import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  CartService,
  ToastService,
} from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 5;

export default {
  // State
  ...BaseModel(),

  isLoading: {
    isFetching: true,
    isFetchingMore: false,
    isRefreshing: false,

    isAddingItem: false,
    isFetchingItem: false,
    isUpdatingItem: false,
    isRemovingItem: false,
  },
  // Computed Values

  // Actions

  setLoading: action((state, payload) => {
    state.isLoading = { ...state.isLoading, ...payload };
  }),

  addItem: action((state, payload) => {
    if (!state.items) {
      state.items = [];
    }
    state.items.unshift(payload);
  }),

  removeItem: action((state, payload) => {
    state.items = state.items.filter(item => item.id != payload);
  }),


  // Side Effects

  addToCart: thunk(async (actions, payload) => {

    actions.setLoading({ isAddingItem: true });

    const [error, data] = await to(CartService.addItem(payload));

    if (error) {
      const { data, problem } = error;
      if (problem === 'CLIENT_ERROR') {
        ToastService.show(data.error);
      }
      actions.setLoading({ isAddingItem: false });
    }
    else {
      const { item } = data.data;

      actions.addItem(item);
      ToastService.show('Product added!', () => {
        actions.setLoading({ isAddingItem: false });
      });
    }


  }),

  removeFromCart: thunk(async (actions, payload) => {

    actions.setLoading({ isRemovingItem: true });

    const [error, data] = await to(CartService.removeItem(payload));

    if (error) {
      const { data, problem } = error;
      if (problem === 'CLIENT_ERROR') {
        ToastService.show(data.error);
      }
      actions.setLoading({ isRemovingItem: false });
    }
    else {
      actions.removeItem(payload);
      ToastService.show('Product removed from your SwineCart!', () => {
        actions.setLoading({ isRemovingItem: false });
      });

    }

  }),


  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    actions.setLoading({
      [ isRefresh ? 'isRefreshing' : 'isFetching' ]: true
    });

    const [error, data] = await to(CartService.getItems(1, LIMIT));

    if (error) {
    }
    else {

      const { items } = data.data;

      actions.setItems({
        items,
        page: 2
      });

    }

    actions.setLoading({
      [ isRefresh ? 'isRefreshing' : 'isFetching' ]: false
    });

  }),

  getMoreItems: thunk(async (actions, payload, { getState }) => {

    const { page: currentPage, items: currentItems } = getState();

    actions.setLoading({ isFetchingMore: true });

    const [error, data] = await to(CartService.getItems(currentPage, LIMIT));

    if (error) {
      const { problem, status } = error;
      if (status === 500) {
        ToastService.show('Please try again later!', null);
      }
    }
    else {
      const { items } = data.data;

      if (items.length > 0) {
        actions.setItems({
          items: [...(currentItems || []), ...items],
          page: currentPage + 1
        });
      }
    }

    actions.setLoading({ isFetchingMore: false });
  }),

};