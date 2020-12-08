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

  setLoading: action((state, payload) => {
    state.isLoading = { ...state.isLoading, ...payload };
  }),

  // thunks

  resetValues: thunk(async (actions, payload) => {
    actions.setValues(initialState);
  }),

  submit: thunk(async (actions, payload, { getState, getStoreActions }) => {

    const { values } = getState();
    const { setTokenData } = getStoreActions().auth;

    const yupErrors = await validate(schema, values);

    actions.setErrors(yupErrors);

    if (!yupErrors) {

      actions.setLoading({ isSubmitting: true });

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
        setTokenData(data.data.token);
        actions.setValues(initialState);
      }

      actions.setLoading({ isSubmitting: false });
    }

  }),

};