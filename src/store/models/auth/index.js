import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Api
} from 'services';

export default {
  // State

  isLoggedIn: false,
  token: null,
  hasError: false,

  isLoading: {
    isCheckingToken: true,
  },

  // Computed Values

  // Actions
  setIsLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = { ...state.isLoading, ...payload };
  }),

  // Side Effects
  logout: thunk(async (actions, payload) => {

  }),

  getTokenFromStorage: thunk(async (actions, payload) => {
    actions.setLoading({ isCheckingToken: true });

    const token = await AsyncStorage.getItem('token');
    actions.setTokenData(token);

    actions.setLoading({ isCheckingToken: false });
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