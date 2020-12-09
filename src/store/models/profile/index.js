import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import kebabCase from 'lodash/kebabCase';

import {
  ToastService, ProfileService
} from 'services';

import { BaseModel } from '../../utils';

export default {

  ...BaseModel(),

  data: null,

  setData: action((state, payload) => {
    state.data = payload;
  }),

  getProfile: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [error, data] = await to(ProfileService.getProfile());

    if (error) {
      actions.setFetchingError(false);
    }
    else {
      const { profile } = data.data;
      actions.setData({
        ...profile,
        province: {
          text: profile.province,
          key: kebabCase(profile.province),
        }
      });
    }

    actions.setLoading(false);

  }),

};