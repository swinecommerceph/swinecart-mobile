import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { CartService, ToastService } from 'services';

import { initialState } from '../modelUtils';


const LIMIT = 5;

export default {
  // State
  ...initialState,

  isAddingItem: false,
  // Computed Values

  // Actions

  setItems: action((state, payload) => {
    const { items, page } = payload;
    state.items = items;
    state.page = page;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setLoadingMore: action((state, payload) => {
    state.isLoadingMore = payload;
  }),

  setRefreshing: action((state, payload) => {
    state.isRefreshing = payload;
  }),

  setIsAddingItem: action((state, payload) => {
    state.isAddingItem = payload;
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
    
    const [error, data] = await to(CartService.removeItem(payload));
    
    if (error) {
    }
    else {
      actions.removeItem(payload);
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