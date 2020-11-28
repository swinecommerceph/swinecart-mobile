import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ShopService, ToastService } from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {

  ...(BaseModel()),

  // State

  // Computed Values

  // Actions

  // Side Effects

  getItems: thunk(async (actions, payload, { getStoreState }) => {

    const filters = getStoreState().filterItems.filters;

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ShopService.getItems(1, LIMIT, filters));
    
    if (error) {
  
      const { problem, status } = error;

      if (status === 500) {
        actions.setFetchingError(true);
      }

    }
    else {

      const { products } = data.data;

      actions.setItems({
        items: products,
        page: 2
      });

    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),

  getMoreItems: thunk(async (actions, payload, { getState, getStoreState }) => {

    const filters = getStoreState().filterItems.filters;
    const { page: currentPage, items: currentItems } = getState();

    actions.setLoadingMore(true);

    const [error, data] = await to(ShopService.getItems(currentPage, LIMIT, filters));

    if (error) {

      const { problem, status } = error;

      if (status === 500) {
        actions.setFetchingError(true);
      }

    }
    else {
      const { products } = data.data;

      if (products.length > 0) {
        actions.setItems({
          items: [...(currentItems || []), ...products],
          page: currentPage + 1
        });
      }
      else {
        ToastService.show('No more items to load!', null);
      }

    }

    actions.setLoadingMore(false);
  }),

};