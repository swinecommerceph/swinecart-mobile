import { action, thunk, computed } from 'easy-peasy';
import last from 'lodash/last';
import to from 'await-to-js';

import { AuthService, NavigationService, ToastService, ChatClient } from 'services';

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
      // ToastService.show('Please try again later!', () => {
      //   NavigationService.navigate('Public');
      // });
    }
    else {
      const { user, topic } = data.data;
      const accountType = last(user.userable_type.split('\\'));
      console.log(accountType);

      // actions.setUserData({ data: user, accountType });
    }
  }),

};