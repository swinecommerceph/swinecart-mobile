import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  ToastService, FarmService
} from 'services';

import { BaseModel } from '../../utils';

export default {

  ...BaseModel(),
  getItem: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [error, data] = await to(FarmService.getFarm(payload));

    if (error) {
      actions.hasFetchingError(false);
    }
    else {
        console.log(data);
    }

    actions.setLoading(false);

  })
};