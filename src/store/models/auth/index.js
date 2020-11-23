import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  AuthService, Api, NavigationService, ToastService
} from 'services';

export default {
  // State
  isLoading: true,
  isLoggingIn: false,
  isLoggingOut: false,
  token: null,
  hasError: false,

  // Computed Values

  // Actions
  setIsLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  setLoggingIn: action((state, payload) => {
    state.isLoggingIn = payload;
  }),

  setLoggingOut: action((state, payload) => {
    state.isLoggingOut = payload.isLoggingOut;
  }),

  setToken: action((state, payload) => {
    state.token = payload;
  }),

  // Side Effects
  login: thunk(async (actions, payload, { getStoreActions }) => {
    const { email, password } = payload;

    actions.setLoggingIn(true);

    const [ error, data ] = await to(AuthService.login({ email, password }));

    if (error) {
      const { problem } = error;
      if (problem === 'TIMEOUT_ERROR') {
        ToastService.show('Please try again later!', null);
      }
      else if (problem === 'CLIENT_ERROR') {
        ToastService.show('Invalid Email or Password!', null);
      }
      else if (problem === 'NETWORK_ERROR') {
        ToastService.show('Please try again later!', null);
      }
      else {
        ToastService.show('Please try again later!', null);
      }
    }
    else {
      ToastService.show('Successfully logged in!', null);
      const { token } = data.data;
      Api.setAuthToken(token);
      actions.setToken(token);
      await AsyncStorage.setItem('token', token);
    }
    actions.setLoggingIn(false);
  }),

  logout: thunk(async (actions, payload) => {

  }),

  getTokenFromStorage: thunk(async (actions, payload) => {

    actions.setIsLoading(true);

    const token = await AsyncStorage.getItem('token');

    if (token) {
      Api.setAuthToken(token);
      actions.setToken(token);
    }
    else {
    }

    actions.setIsLoading(false);
  }),
};