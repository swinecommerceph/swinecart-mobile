import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ProductsService, ToastService } from 'services';
import { productMapper } from 'utils/mappers/responseMappers';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {
  // State
  ...(BaseModel()),

  // Computed Values

  // Actions

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
      ToastService.show('Something went wrong. Please try again later!');
    }
    else {
      const { status } = data.data;
      ToastService.show(`Product is now ${status}`);
      actions.toggleStatus({ index: payload, status });
    }

  }),

  deleteProduct: thunk(async (actions, payload) => {

    const [error, data] = await to(ProductsService.deleteProduct(payload.id));

    if (error) {
      ToastService.show('Something went wrong. Please try again later!');
    }
    else {
      actions.deleteItem(payload);
      ToastService.show(`Product deleted!`);
    }

  }),

  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ProductsService.getProducts(1, LIMIT));

    if (error) {
      actions.setFetchingError(true);
    }
    else {
      actions.setItems({ items: data.data.products, page: 2 });
    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),

  getMoreItems: thunk(async (actions, payload, { getState }) => {

    const { page: currentPage, items: currentItems } = getState();

    actions.setLoadingMore(true);

    const [error, data] = await to(
      ProductsService.getProducts(currentPage, LIMIT)
    );

    if (error) {
      actions.setFetchingError(true);
    }
    else {

      const { products } = data.data;

      if (products.length > 0) {
        actions.setItems({
          items: [...(currentItems), ...products],
          page: currentPage + 1
        });
      }
    }

    actions.setLoadingMore(false);
  }),

};