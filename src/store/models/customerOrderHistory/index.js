import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { TransactionService, ToastService } from 'services';

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

    const [error, data] = await to(TransactionService.getHistory(1, LIMIT));

    if (error) {
      const { problem, status } = error;
      if (status === 500) {
        ToastService.show('Please try again later!', null);
      }
    }
    else {

      const { history: items } = data.data;

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

    const [error, data] = await to(TransactionService.getHistory(currentPage, LIMIT));

    if (error) {

    }
    else {
      const { history: moreItems } = data.data;

      if (moreItems && moreItems.length > 0) {
        actions.setItems({
          items: [...currentItems, moreItems],
          page: currentPage + 1
        });
      }

    }

    actions.setLoadingMore(false);
  }),

};