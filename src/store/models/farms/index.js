import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  ToastService, FarmService
} from 'services';

import { BaseModel } from '../../utils';

export default {

  ...BaseModel(),

  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

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

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  })
};