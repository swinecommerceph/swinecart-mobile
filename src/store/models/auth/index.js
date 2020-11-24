import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  AuthService, Api, NavigationService, ToastService
} from 'services';

import { apiErrors } from 'constants/enums';

export default {
  // State
  isLoading: true,
  isLoggedIn: false,
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
    state.isLoggingOut = payload;
  }),

  setIsLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload;
  }),

  // Side Effects
  login: thunk(async (actions, payload) => {
    const { email, password } = payload;

    actions.setLoggingIn(true);

    const [ error, data ] = await to(AuthService.login({ email, password }));

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
      ToastService.show('Successfully logged in!', null);
      actions.setTokenData(data.data.token);
    }
    actions.setLoggingIn(false);
  }),

  logout: thunk(async (actions, payload) => {

  }),

  getTokenFromStorage: thunk(async (actions, payload) => {
    actions.setIsLoading(true);

    const token = await AsyncStorage.getItem('token');
    actions.setTokenData(token);

    actions.setIsLoading(false);
  }),

  setTokenData: thunk(async (actions, payload) => {
    const token = payload;

    if (token) {
      Api.setAuthToken(token);
      actions.setIsLoggedIn(!!token);
      await AsyncStorage.setItem('token', token);
    }
    else {
      Api.setAuthToken(null);
      actions.setIsLoggedIn(!!token);
      await AsyncStorage.removeItem('token');
    }
  }),

};