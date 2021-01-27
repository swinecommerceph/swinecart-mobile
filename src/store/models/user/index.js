import { action, thunk } from 'easy-peasy';
import last from 'lodash/last';
import to from 'await-to-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthService, ToastService } from 'services';

import { apiErrors } from 'constants/enums';

const initialState = {
  data: null,
  accountType: null,
};

export default {
  // State
  ...initialState,
  // Actions

  setUserData: action((state, payload) => {

    const { accountType } = payload;

    state.data = payload;
    state.accountType = accountType;
  }),

  // Thunk
  getUserData: thunk(async (actions, payload, { getStoreActions }) => {

    const userData = await AsyncStorage.getItem('user');

    if (userData) {
      actions.setUserData(JSON.parse(userData));
    }

  }),

  saveUserData: thunk(async (actions, payload) => {
    const userData = payload;

    if (userData) {

      const userString = JSON.stringify(userData);

      await AsyncStorage.setItem('user', userString);
    }
    else {
      await AsyncStorage.removeItem('user');
    }

  }),
};