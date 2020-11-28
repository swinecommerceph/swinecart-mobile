import { action, computed, thunk } from 'easy-peasy';
import map from 'lodash/map';
import to from 'await-to-js';
import { OrderService } from 'services';
import { requestMapper } from 'utils/mappers/responseMappers';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {
  ...(BaseModel()),

  currentProduct: null,


  // Computed Values

  // Actions

  setCurrentProduct: action((state, payload) => {
    state.currentProduct = payload;
  }),

  // Side Effects
  getItems: thunk(async (actions, payload, { getState }) => {

    const { isRefresh } = payload;

    const { currentProduct: { id } } = getState();

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(OrderService.getRequests(id, 1, LIMIT));

    if (error) {
      actions.setFetchingError(true);
      console.log(error);
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
  getMoreItems: thunk(async (actions, payload, { getState }) => {

    const {
      page: currentPage,
      items: currentItems,
      currentProduct: { id }
    } = getState();

    actions.setLoadingMore(true);

    const [error, data] = await to(OrderService.getRequests(id, currentPage, LIMIT));

    if (error) {
      actions.setFetchingError(true);
      console.log(error);
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