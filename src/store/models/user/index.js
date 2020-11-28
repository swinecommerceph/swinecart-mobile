import { action, thunk } from 'easy-peasy';
import last from 'lodash/last';
import to from 'await-to-js';

import { AuthService, ToastService, ChatClient } from 'services';

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

    const { accountType, data } = payload;
    const { id, name } = data;

    state.data = data;
    state.accountType = accountType;
    state.currentUserGCFormat = { _id: id, name };
  }),

  // Thunk
  getUserData: thunk(async (actions, payload, { getStoreActions }) => {

    const [error, data] = await to(AuthService.getLoggedInUser());

    if (error) {
      const { problem } = error;

      if (apiErrors[problem]) {
        getStoreActions().auth.setTokenData(null);
      }
    }
    else {
      const { user, topic } = data.data;
      const accountType = last(user.userable_type.split('\\'));
      actions.setUserData({ data: user, accountType });
    }

  }),
};