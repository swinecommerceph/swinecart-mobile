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
  mode: 'add',

  provinceOptions: provinces,

  isLoading: {
    isSubmitting: false,
  },

  setMode: action((state, payload) => {
    state.mode = payload;
  }),

  // thunks

  resetForm: thunk(async (actions, payload) => {
    actions.setValues(initialState);
    actions.setTouched({});
    actions.setErrors({});
  }),

  submit: thunk(async (actions, payload, { getState, getStoreActions }) => {

    actions.setLoading({ isSubmitting: true });

    const { values, mode } = getState();

    const formErrors = await actions.validateForm();

    if (!formErrors) {

      const [ error, data ] = await to(
        mode === 'add'
          ? FarmService.addFarm(toRequestFormat(values))
          : FarmService.updateFarm(values.id, toRequestFormat(values))
      );

      if (error) {
        ToastService.show('Please try again later!');
        actions.setLoading({ isSubmitting: false });
        return;
      }
      else {
        getStoreActions().farms.getItems({ isRefresh: false });
        NavigationService.back();
        ToastService.show(
          mode === 'add' ? 'Farm added!' : 'Farm updated!',
          () => {
            actions.setLoading({ isSubmitting: false });
          }
        );
      }
    }

    actions.setLoading({ isSubmitting: false });
  }),
};