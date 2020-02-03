import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ShopService, ToastService } from 'services';

import { initialState } from '../modelUtils';

const LIMIT = 5;

export default {
  // State
  ...initialState,

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

  // Side Effects

  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ShopService.getItems(1, LIMIT));
  
    if (error) {
    }
    else {

      const { products } = data.data;

      actions.setItems({
        items: products,
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

    const [error, data] = await to(ShopService.getItems(currentPage, LIMIT));

    if (error) {
      const { problem, status } = error;
      if (status === 500) {
        ToastService.show('Please try again later!', null);
      }
    }
    else {
      const { products } = data.data;

      if (products.length > 0) {
        actions.setItems({
          items: [...(currentItems || []), ...products],
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