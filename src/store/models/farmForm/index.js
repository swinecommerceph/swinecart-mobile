import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  ToastService,
  NavigationService,
  FarmService,
} from 'services';

import { BaseModel } from '../../utils';

import { formInitialState } from './utils';

export default {

  ...BaseModel(),

  data: {...formInitialState },

  isAdding: false,
  isUpdating: false,
  isDeleting: false,

  setData: action((state, payload) => {
    state.data = { ...payload };
  }),

  resetForm: action((state, payload) => {
    state.data = { ...formInitialState };
  }),

  addFarm: thunk(async (actions, payload) => {

    const {
      values,
      resetForm
    } = payload;

    const requestData = {
      ...values,
      province: values.province.text,
    };

    const [ error, data ] = await to(FarmService.addFarm(requestData));

    if (error) {
      actions.setFetchingError(true);
    }
    else {
      ToastService.show('Add success!', null);
      NavigationService.back();
      resetForm();
    }

  }),

  updateFarm: thunk(async (actions, payload) => {

    const {
      values,
      resetForm
    } = payload;

    const requestData = {
      ...values,
      province: values.province.text,
    };

    const [ error, data ] = await to(FarmService.updateFarm(
      values.id, requestData
    ));

    if (error) {
      actions.setFetchingError(true);
    }
    else {
      ToastService.show('Update success!', null);
      NavigationService.back();
    }

  }),

};