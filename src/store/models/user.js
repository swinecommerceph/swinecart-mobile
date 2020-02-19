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

  getAccountType: thunk(async (actions, payload, { getStoreActions }) => {

    if (payload.token) {
      const [error, data] = await to(AuthService.getLoggedInUser());

      if (error) {
        ToastService.show('Please try again later!', () => {
          NavigationService.navigate('Public');
        });
      }
      else {
        const { user, topic } = data.data;
        const accountType = last(user.userable_type.split('\\'));

        actions.setUserData({ data: user, accountType });
        getStoreActions().notifications.getTopic(topic);
        // ChatClient.init(getStoreActions().chat.onMessage, user);
        NavigationService.navigate(accountType);
      }
    }
    else {
      ToastService.show('Please try again later!', () => {
        NavigationService.navigate('Public');
      });
    }

  }),

};