import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';

import {
  ProvinceService
} from 'services';

import { BaseModel } from '../../utils';

export default {

  ...BaseModel(),

  getItems: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [ error, data ] = await to(ProvinceService.getProvinces());

    if (error) {
      actions.setFetchingError(false);
    }
    else {
      const { provinces } = data.data;

      const items = provinces.map(province => {
        return {
          text: province,
          key: kebabCase(province)
        }
      });

      actions.setItems({
        items,
        page: 1
      });
    }

    actions.setLoading(false);

  }),

};