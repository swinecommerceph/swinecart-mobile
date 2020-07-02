import { action, thunk } from 'easy-peasy';
import map from 'lodash/map';
import to from 'await-to-js';

import { ProductsService, ToastService } from 'services';
import { productMapper } from 'utils/mappers/responseMappers';

import { addGenericModel } from '../../utils';

const LIMIT = 10;

export default {
  // State
  ...(addGenericModel()),

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
    }
    else {
      const { status } = data.data;
      ToastService.show(`Product ${element.name} is now ${status}`);
      actions.toggleStatus({ index: payload, status });
    }

  }),

  deleteProduct: thunk(async (actions, payload) => {

    const [error, data] = await to(ProductsService.deleteProduct(payload.id));

    if (error) {
      ToastService.show('Please try again later!');
    }
    else {
      ToastService.show(`Product deleted!`);
      actions.deleteItem(payload);
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

      const { products } = data.data;
      const items = map(products, productMapper);

      actions.setItems({ items, page: 2 });

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