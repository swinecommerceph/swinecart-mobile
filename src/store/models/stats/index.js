import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  ToastService, DashboardService
} from 'services';

import {
  combineStatData
} from './utils';

export default {

  data: null,

  isLoading: false,

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setData: action((state, payload) => {
    const { requested, reserved, on_delivery, sold, displayed, hidden } = payload;

    state.data = {
      requested,
      reserved,
      onDelivery: on_delivery,
      sold,
      displayed: combineStatData(displayed, requested),
      hidden: hidden,
      available: combineStatData(displayed, requested, hidden ),
    };

  }),

  getData: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [error, data] = await to(DashboardService.getStats());

    if (error) {

    }
    else {
      const { stats } = data.data;
      actions.setData(stats);
    }

    actions.setLoading(false);

  }),
};