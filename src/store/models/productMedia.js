import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { ProductsService, ToastService } from 'services';
import { initialState } from './modelUtils';

const LIMIT = 10;

let id = 0;

export default {
  ...initialState,
  
  currentProduct: { id: 20 },
  // Computed Values

  // Actions

  resetState: action((state, payload) => {
    state.requests = null;
    state.currentProduct = null;
    state.page = 1;
    state.hasError = false;
    state.isLoadingMore = false;
    state.isRefreshing = false;
    state.isLoading = false;
  }),

  setCurrentProduct: action((state, payload) => {
    state.currentProduct = payload;
  }),

  setItems: action((state, payload) => {
    const { items = [] } = payload;
    state.items = items;
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
  uploadPhoto: thunk(async (actions, payload, { getState }) => {
    const { items } = getState();

    const newPhoto = {
      id: ++id,
      link: payload.uri
    };

    actions.setItems({
      items: [...(items || []), newPhoto]
    });
  }),
  getItems: thunk(async (actions, payload, { getState }) => {

    const { currentProduct } = getState();

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ProductsService.getProductMedia(currentProduct.id));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { images } = data.data;
      actions.setItems({ items: images });
    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),
};