import { action, computed, thunk } from 'easy-peasy';

import {
  ToastService
} from 'services';

export default {

  currentRoute: 'stats',

  setCurrentRoute: action((state, payload) => {
    state.currentRoute = payload;
  }),

};