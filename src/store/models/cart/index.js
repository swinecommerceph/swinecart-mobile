import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { CartService, ToastService } from 'services';

import { BaseModel } from '../../utils';


const LIMIT = 5;

export default {
  // State
  ...BaseModel(),

  isAddingItem: false,
  isRemovingItem: false,
  // Computed Values

  // Actions

  setIsAddingItem: action((state, payload) => {
    state.isAddingItem = payload;
  }),

  setIsRemovingItem: action((state, payload) => {
    state.isRemovingItem = payload;
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

    actions.setIsAddingItem(true);

    const [error, data] = await to(CartService.addItem(payload));

    if (error) {
      const { data, problem } = error;
      if (problem === 'CLIENT_ERROR') {
        ToastService.show(data.error, () => {
        });
        actions.setIsAddingItem(false);
      }
    }
    else {
      const { item } = data.data;

      ToastService.show('Product added to your SwineCart', () => {
        actions.addItem(item);
        actions.setIsAddingItem(false);
      });
    }


  }),
  removeFromCart: thunk(async (actions, payload) => {

    actions.setIsRemovingItem(true);

    const [error, data] = await to(CartService.removeItem(payload));

    if (error) {
      const { data, problem } = error;
      if (problem === 'CLIENT_ERROR') {
        ToastService.show(data.error, () => {
        });
        actions.setIsRemovingItem(false);
      }
    }
    else {

      ToastService.show('Product removed from your SwineCart!', () => {
        actions.removeItem(payload);
        actions.setIsRemovingItem(false);
      });

    }

  }),


  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

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

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),

  getMoreItems: thunk(async (actions, payload, { getState }) => {

    const { page: currentPage, items: currentItems } = getState();

    actions.setLoadingMore(true);

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
      else {
        ToastService.show('No more items to load!', null);
      }

    }

    actions.setLoadingMore(false);
  }),

};