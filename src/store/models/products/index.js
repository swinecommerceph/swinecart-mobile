import { action, thunk } from 'easy-peasy';
import map from 'lodash/map';
import to from 'await-to-js';

import { ProductsService, ToastService } from 'services';
import { productMapper } from 'utils/mappers/responseMappers';

import { initialState } from '../modelUtils';


const LIMIT = 5;

export default {
  // State
  ...initialState,

  // Computed Values

  // Actions

  setItems: action((state, payload) => {
    const { items, page } = payload;
    state.items = items;
    state.page = page;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setLoadingMore: action((state, payload) => {
    state.isLoadingMore = payload;
  }),

  setRefreshing: action((state, payload) => {
    state.isRefreshing = payload;
  }),

  addItem: action((state, payload) => {
    if (!state.items) {
      state.items = [];
    }
    state.items.unshift(productMapper(payload));
  }),

  deleteItem: action((state, payload) => {
    const { id } = payload;
    state.items = state.items.filter(e => e.id !== id);
  }),

  toggleStatus: action((state, payload) => {
    const { index, status } = payload;
    state.items[index].status = status;
  }),

  // Side Effects

  updateVisibility: thunk(async (actions, payload, { getState }) => {
    const element = getState().items[payload];

    const [error, data] = await to(ProductsService.toggleStatus(element.id));
    
    if (error) {
    }
    else {
      const { status } = data.data;
      ToastService.show(`Product ${element.name} is now ${status}`);
      actions.toggleStatus({ index: payload, status });
    }

  }),

  deleteProduct: thunk(async (actions, payload, { getState }) => {
    const element = payload;

    const [error, data] = await to(ProductsService.deleteProduct(element.id));

    if (error) {
      ToastService.show('Please try again later!');
    }
    else {
      ToastService.show(`Product ${element.name} is deleted!`);
      actions.deleteItem(element);
    }


  }),

  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    isRefresh 
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ProductsService.getProducts(1, LIMIT));

    if (error) {
    }
    else {

      const { products } = data.data;
      const items = map(products, productMapper);

      actions.setItems({
        items,
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

    const [error, data] = await to(ProductsService.getProducts(currentPage, LIMIT));

    if (error) {
      const { problem, status } = error;
      if (status === 500) {
        ToastService.show('Please try again later!', null);
      }
    }
    else {
      const { products } = data.data;

      if (products.length > 0) {
        const items = map(products, productMapper);

        actions.setItems({
          items: [...(currentItems || []), ...items],
          page: currentPage + 1
        });
      }
      else {
        ToastService.show('No more products to load!', null);
      }

    }

    actions.setLoadingMore(false);
  }),

};