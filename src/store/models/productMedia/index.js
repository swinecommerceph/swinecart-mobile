import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { ProductsService, ToastService } from 'services';
import { initialState } from '../modelUtils';

const LIMIT = 10;

export default {
  ...initialState,

  currentProduct: { id: 45 },
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

  removeItem: action((state, payload) => {
    state.items = state.items.filter(item => item.id !== payload);
  }),

  // Side Effects
  deletePhoto: thunk(async (actions, payload, { getState }) => {

    const { currentProduct: { id } } = getState();

    const [error, data] = await to(ProductsService.deleteMedia(id, {
      mediaId: payload
    }));

    if (error) {

    }
    else {
      actions.removeItem(payload);
    }

    
  }),
  uploadPhoto: thunk(async (actions, payload, { getState }) => {
    
    const { items, currentProduct: { id } } = getState();

    const [error, data] = await to(ProductsService.addMedia(id, payload));
    // console.dir(error, data);
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