import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import AsyncStorage from '@react-native-community/async-storage';

import { 
  AuthService, Api, NavigationService, ToastService
} from 'services';

export default {
  // State
  isLoggingIn: false,
  isLoggingOut: false,
  token: null,
  hasError: false,

  // Computed Values

  // Actions
  setLoggingIn: action((state, payload) => {
    state.isLoggingIn = payload.isLoggingIn;
  }),

  setLoggingOut: action((state, payload) => {
    state.isLoggingOut = payload.isLoggingOut;
  }),

  setToken: action((state, payload) => {
    state.token = payload.token;
  }),

  // Side Effects
  login: thunk(async (actions, payload, { getStoreActions }) => {
    const { email, password } = payload;

    actions.setLoggingIn({ isLoggingIn: true });

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
      

      actions.setLoggingIn({ isLoggingIn: false });
    }
    else {
      ToastService.show('Successfully logged in!', () => {
        const { token } = data.data;
        Api.setAuthToken(token);
        actions.setToken({ token });
        actions.saveTokenToStorage({ token });
        getStoreActions().user.getAccountType({ token });
      });
      
    }

  }),

  logout: thunk(async (actions, payload) => {

    actions.setLoggingIn({ isLoggingIn: false });
    actions.setLoggingOut({ isLoggingOut: true });

    const [ error, data ] = await to(AuthService.logout());
  
    if (error) {
      const { problem } = error;

      if (problem === 'TIMEOUT_ERROR') {
        ToastService.show('Please try again later!', null);
      }

      actions.setLoggingOut({ isLoggingOut: false });
    }
    else {
      ToastService.show('Successfully logged out!', async () => {
        Api.setAuthToken(null);
        actions.setToken({ token: null });
        await AsyncStorage.removeItem('token');
        NavigationService.navigate('Public');
        actions.setLoggingOut({ isLoggingOut: false });
      });
      
    }

  }),

  checkStorageForToken: thunk(async (actions, payload, { getStoreActions }) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      Api.setAuthToken(token);
      actions.setToken({ token });
      actions.saveTokenToStorage({ token });
      getStoreActions().user.getAccountType({ token });
    }
    else {
      NavigationService.navigate('Public');
    }
  }),

  saveTokenToStorage: thunk(async (actions, payload) => {
    const { token } = payload;
    await AsyncStorage.setItem('token', token);
  }),

};