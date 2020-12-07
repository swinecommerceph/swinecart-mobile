import { action, computed, thunk } from 'easy-peasy';

import {
  validate
} from '../utils';

import {
  initialState,
  schema
} from './utils';

export default {

  // state

  values: { ...initialState },
  errors: {},
  touched: {},

  isLoading: {
    isSubmitting: false,
  },

  // actions

  setErrors: action((state, payload) => {
    state.errors = { ...payload };
  }),

  setValues: action((state, payload) => {
    state.values = { ...payload };
  }),

  setFieldValue: action((state, payload) => {
    const { name, value } = payload;
    state.values[name] = value;
  }),

  setFieldTouched: action((state, payload) => {
    const { name, value } = payload;
    state.touched[name] = value;
  }),

  // Usage: setLoading({
  //   flag: 'isSubmitting',
  //   value: true
  // })

  setLoading: action((state, payload) => {
    const { flag, value } = payload;
    state.isLoading[flag] = value;
  }),

  // thunks

  submit: thunk(async (actions, payload, { getState, getStoreActions }) => {

    const { values } = getState();
    const { login } = getStoreActions().auth;

    const errors = await validate(schema, values);

    actions.setErrors(errors);

    if (!errors) {
      login(values);
    }

  }),

  resetValues: thunk(async (actions, payload) => {
    actions.setValues(initialState);
  }),

};