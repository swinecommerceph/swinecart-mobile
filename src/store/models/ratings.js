import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  ToastService, DashboardService
} from 'services';

export default {

  data: null,

  isLoading: false,

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setData: action((state, payload) => {
    state.data = payload;
  }),

  getData: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [error, data] = await to(DashboardService.getRatings());

    if (error) {

    }
    else {
      const { ratings } = data.data;
      actions.setData(ratings);
    }

    actions.setLoading(false);

  }),
};