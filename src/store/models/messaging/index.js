import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ToastService, MessagingService } from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {
  // State
  ...BaseModel(),

  // Computed Values

  // Actions

  // Side Effects
  getItems: thunk(async (actions, payload, { getStoreState }) => {

    const { accountType } = getStoreState().user;

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(MessagingService.getThreads(accountType, 1, LIMIT));

    if (error) {
      actions.setHasFetchingError(true);
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