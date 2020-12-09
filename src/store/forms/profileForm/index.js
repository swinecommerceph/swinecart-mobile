import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { provinces } from 'constants/enums';

import {
  ToastService,
  NavigationService,
  FarmService,
} from 'services';

import {
  validate,
  BaseForm,
} from '../utils';

import {
  toRequestFormat,
  initialState,
  schema,
} from './utils';

export default {

  ...(BaseForm()),

  // state
  schema,
  values: { ...initialState },

  provinceOptions: provinces,

  isLoading: {
    isSubmitting: false,
  },

  // thunks

  resetForm: thunk(async (actions, payload) => {
    actions.setValues(initialState);
    actions.setTouched({});
    actions.setErrors({});
  }),

  submit: thunk(async (actions, payload, { getState, getStoreActions }) => {

    actions.setLoading({ isSubmitting: true });

    const { values } = getState();

    const formErrors = await actions.validateForm();

    if (!formErrors) {
      console.log(values, toRequestFormat(values));
    }

    actions.setLoading({ isSubmitting: false });
  }),
};