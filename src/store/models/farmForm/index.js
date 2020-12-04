import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  ToastService, FarmService
} from 'services';

import { BaseModel } from '../../utils';

import { formInitialState } from './utils';

export default {

  ...BaseModel(),

  data: {...formInitialState },

  setData: action((state, payload) => {
    state.data = { ...payload };
  }),

  resetForm: action((state, payload) => {
    state.data = { ...formInitialState };
  })
};