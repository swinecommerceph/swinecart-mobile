import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import take from 'lodash/take';

import {
  ToastService, DashboardService
} from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {

  ...BaseModel(),

  totalCount: 0,

  sampleReviews: computed(state => state.items ? take(state.items, 3) : []),

  setTotalCount: action((state, payload) => {
    state.totalCount = payload;
  }),

  getItems: thunk(async (actions, payload, { getState, getStoreActions }) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(DashboardService.getReviews(1, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { reviews, totalCount } = data.data;

      actions.setTotalCount(totalCount);
      actions.setItems({
        items: reviews,
        page: 2
      });
    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),

  getMoreItems: thunk(async (actions, payload, { getStoreState, getState }) => {

    const { page: currentPage, items: currentItems } = getState();

    actions.setLoadingMore(true);

    const [error, data] = await to((DashboardService.getReviews(currentPage, LIMIT)));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { reviews } = data.data;

      if (reviews.length > 0) {
        actions.setItems({
          items: [...(currentItems || []), ...reviews],
          page: currentPage + 1
        });
      }
      else {
        ToastService.show('No more reviews to load!', null);
      }

    }

    actions.setLoadingMore(false);

  }),

};