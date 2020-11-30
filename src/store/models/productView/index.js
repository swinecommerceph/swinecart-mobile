import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ProductsService, ToastService } from 'services';

export default {
  // State

  data: null,
  isLoading: true,
  hasFetchingError: false,

  // Computed Values

  // Actions

  setData: action((state, payload) => {
    state.data = payload;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setHasFetchingError: action((state, payload) => {
    state.hasFetchingError = payload;
  }),

  // Side Effects

  getData: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [error, data] = await to(ProductsService.getProductDetails(payload));

    if (error) {
      setHasFetchingError(true);
    }
    else {
      const { product } = data.data;
      console.log(product);
      actions.setData(product);
    }

    actions.setLoading(false);

  }),

};