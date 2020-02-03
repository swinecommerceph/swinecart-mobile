import { action, computed, thunk } from 'easy-peasy';
import upperFirst from 'lodash/upperFirst';
import to from 'await-to-js';

import {
  ToastService, FarmService
} from 'services';

export default {

  items: null,

  isLoading: false,

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setItems: action((state, payload) => {
    state.items = payload;
  }),

  getItems: thunk(async (actions, payload, { getState, getStoreActions }) => {

    if (!getState().items)  {
      actions.setLoading(true);
      const [error, data] = await to(FarmService.getFarms());

      if (error) {

      }
      else {
        const { farms } = data.data;
        const items = farms.map(farm => {
          const { name, id, province } = farm;
          farm.text = `${upperFirst(name)}, ${upperFirst(province)}`;
          farm.key = id;
          return farm;
        });
        actions.setItems(items);
      }
      actions.setLoading(false);
    }

  })

};