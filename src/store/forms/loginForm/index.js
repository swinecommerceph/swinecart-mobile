import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import {
  AuthService,
  ToastService
} from 'services';

import { apiErrors } from 'constants/enums';

import {
  validate,
  BaseForm,
} from '../utils';

import {
  initialState,
  schema,
} from './utils';

export default {

  ...(BaseForm()),

  // state
  schema,
  values: { ...initialState },

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
    const { setTokenData } = getStoreActions().auth;
    const { setUserData, saveUserData } = getStoreActions().user;

    const formErrors = await actions.validateForm();

    if (!formErrors) {

      const [ error, data ] = await to(AuthService.login(values));

      if (error) {
        const { problem } = error;

        if (problem === 'CLIENT_ERROR') {
          ToastService.show('Invalid Email or Password!', null);
        }
        else if (apiErrors[problem]) {
          ToastService.show('Something went wrong!', null);
        }
      }
      else {

        const { token, user } = data.data;
        setTokenData(token);
        setUserData(user);
        saveUserData(user);
        actions.setValues(initialState);
      }
    }

    actions.setLoading({ isSubmitting: false });

  }),

};