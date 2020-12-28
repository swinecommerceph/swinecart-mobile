import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  ToastService,
  FarmService,
} from 'services';

import { BaseModel } from '../../utils';

export default {

  ...BaseModel(),

  isLoading: {
    isFetching: true,
    isFetchingMore: false,
    isRefreshing: false,

    isAddingItem: false,
    isFetchingItem: false,
    isUpdatingItem: false,
    isRemovingItem: false,
  },

  setLoading: action((state, payload) => {
    state.isLoading = { ...state.isLoading, ...payload };
  }),

  removeItem: action((state, payload) => {
    state.items = state.items.filter(item => item.id !== payload);
  }),

  deleteFarm: thunk(async (actions, payload) => {

    actions.setLoading({ isRemovingItem: true });

    const [ error, data ] = await to(FarmService.deleteFarm(payload));

    if (error) {
      actions.setLoading({ isRemovingItem: false });
    }
    else {
      actions.removeItem(payload);
      ToastService.show('Delete success!', () => {
        actions.setLoading({ isRemovingItem: false });
      });
    }

  }),

  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    actions.setLoading({
      [ isRefresh ? 'isRefreshing' : 'isFetching' ]: true
    });

    const [error, data] = await to(FarmService.getFarms());

    if (error) {
      actions.hasFetchingError(true);
    }
    else {
      const { farms } = data.data;

      const items = farms.map(farm => {
        farm.displayName = `${farm.name}, ${farm.province}`;
        return farm;
      });

      actions.setItems({ items, page: 1 });
    }

    actions.setLoading({
      [ isRefresh ? 'isRefreshing' : 'isFetching' ]: false
    });

  })
};