import { action, thunk } from 'easy-peasy';
import map from 'lodash/map';
import to from 'await-to-js';

import { ProductsService, ToastService } from 'services';
import { productMapper } from 'utils/mappers/responseMappers';

export default {
  // State

  currentId: null,
  data: null,
  isLoading: false,

  // Computed Values

  // Actions

  setCurrentId: action((state, payload) => {
    state.currentId = payload;
  }),

  setData: action((state, payload) => {
    state.data = payload;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  // Side Effects


  getData: thunk(async (actions, payload, { getState }) => {

    const { currentId } = getState();

    actions.setLoading(true);

    const [error, data] = await to(ProductsService.getProductDetails(currentId));


    if (error) {

    }
    else {
      const { product } = data.data;
      actions.setData(product);
    }


    actions.setLoading(false);

  }),

};