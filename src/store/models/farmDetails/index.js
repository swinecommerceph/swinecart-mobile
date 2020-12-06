import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';

import {
  ToastService, FarmService
} from 'services';

import { BaseModel } from '../../utils';

export default {

  ...BaseModel(),

  data: null,

  setData: action((state, payload) => {
    state.data = payload;
  }),

  getItem: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [error, data] = await to(FarmService.getFarm(payload));

    if (error) {
      actions.hasFetchingError(false);
    }
    else {
      const { farm } = data.data;
      actions.setData({
        ...farm,
        province: {
          text: farm.province,
          key: kebabCase(farm.province),
        }
      });
    }

    actions.setLoading(false);

  })
};