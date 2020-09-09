import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ToastService, TransactionService, NavigationService } from 'services';

export default {
  // State
  data: null,
  isLoading: true,
  // Actions

  setData: action((state, payload) => {
    state.data = payload;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  // Side Effects

  getOrder: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [ error, data ] = await to(TransactionService.getOrder(payload));

    if (error) {

    }
    else {
      const { order } = data.data;
      actions.setData(order);
    }

    actions.setLoading(false);


  }),

};