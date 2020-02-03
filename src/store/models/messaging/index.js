import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ToastService, MessagingService } from 'services';
import { initialState } from '../modelUtils';


const LIMIT = 10;

export default {
  // State
  ...initialState,

  // Computed Values

  // Actions

  resetState: action((state) => {
    state = initialState;
  }),

  setItems: action((state, payload) => {
    const { items = [], page } = payload;
    state.items = items;
    state.page = page;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setRefreshing: action((state, payload) => {
    state.isRefreshing = payload;
  }),

  setLoadingMore: action((state, payload) => {
    state.isLoadingMore = payload;
  }),

  // Side Effects
  getItems: thunk(async (actions, payload, { getStoreState }) => {

    const { accountType } = getStoreState().user;

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(MessagingService.getThreads(accountType, 1, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { threads } = data.data;

      actions.setItems({
        items: threads,
        page: 2
      });

    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),

  getMoreItems: thunk(async (actions, payload, { getStoreState, getState }) => {

    const { page: currentPage, items: currentItems } = getState();
    const { accountType } = getStoreState().user;

    actions.setLoadingMore(true);

    const [error, data] = await to(MessagingService.getThreads(accountType, currentPage, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { threads } = data.data;

      if (threads.length > 0) {
        actions.setItems({
          items: [...(currentItems || []), ...threads],
          page: currentPage + 1
        });
      }
      else {
        ToastService.show('No more chat threads to load!', null);
      }

    }

    actions.setLoadingMore(false);

  }),


};