import { action, computed, thunk } from 'easy-peasy';
import map from 'lodash/map';
import to from 'await-to-js';
import { OrderService, ToastService } from 'services';
import { requestMapper } from 'utils/mappers/responseMappers';
import { initialState } from './modelUtils';

const LIMIT = 10;

export default {
  currentProduct: null,
  ...initialState,

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
    const { items = [], page } = payload;
    state.items = items;
    state.page = page;
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
  getItems: thunk(async (actions, payload, { getState }) => {

    const { currentProduct } = getState();

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(OrderService.getOrderRequests(currentProduct.id, 1, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { requests } = data.data;
      const items = map(requests, requestMapper);

      actions.setItems({
        items,
        page: 2
      });

    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),
  getMoreItems: thunk(async (actions, payload, { getStoreState, getState }) => {

    const { currentProduct, page: currentPage, items: currentItems } = getState();

    actions.setLoadingMore(true);

    const [error, data] = await to(OrderService.getOrderRequests(currentProduct.id, currentPage, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { requests } = data.data;
      const items = map(requests, requestMapper);

      actions.setItems({
        items: [...(currentItems || []), ...items],
        page: currentPage + 1
      });

    }

    actions.setLoadingMore(false);

  }),
};