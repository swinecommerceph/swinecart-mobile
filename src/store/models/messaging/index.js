import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ToastService, ChatService } from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {
  // State
  ...BaseModel(),

  // Computed Values

  // Actions

  // Side Effects
  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ChatService.getThreads(1, LIMIT));

    if (error) {
      actions.setFetchingError(true);
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

  getMoreItems: thunk(async (actions, payload, { getState }) => {

    const { page: currentPage, items: currentItems } = getState();

    actions.setLoadingMore(true);

    const [error, data] = await to(ChatService.getThreads(currentPage, LIMIT));

    if (error) {
      actions.setFetchingError(true);
    }
    else {
      const { threads } = data.data;

      if (threads.length > 0) {
        actions.setItems({
          items: [...(currentItems || []), ...threads],
          page: currentPage + 1
        });
      }

    }

    actions.setLoadingMore(false);

  }),
};