import { action, thunk } from 'easy-peasy';
import last from 'lodash/last';
import to from 'await-to-js';

import { AuthService, ToastService, ChatClient } from 'services';

import { apiErrors } from 'constants/enums';

export default {
  // State
  data: null,
  currentUserGCFormat: null,
  accountType: null,

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
          ToastService.show('Something went wrong!', null);
          getStoreActions().auth.setToken(null);
        }
        else {
        }
      }
      else {
        const { user, topic } = data.data;
        const accountType = last(user.userable_type.split('\\'));
        actions.setUserData({ data: user, accountType });
      }
  }),
};