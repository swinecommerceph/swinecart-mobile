import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { BreederProfileService, ToastService, NavigationService } from 'services';
import { breederProfileMapper } from 'utils/mappers/responseMappers';

export default {
  // State
  isLoading: false,
  hasError: false,
  data: null,

  // Computed Values

  // Actions
  setLoading: action((state, payload) => {
    state.isLoading = payload.isLoading;
  }),

  setData: action((state, payload) => {
    state.data = payload.data;
  }),

  setError: action((state, payload) => {
    state.hasError = payload.hasError;
  }),

  // Side Effects
  getData: thunk(async (actions, payload) => {

    actions.setError({ hasError: false });
    actions.setLoading({ isLoading: true });

    const [error, data] = await to(BreederProfileService.getProfile());

    if (error) {
      const { problem, status } = error;
      if (problem === 'CLIENT_ERROR') {
        if(status === 401) {
          ToastService.show('Please login again!', () => {
            NavigationService.navigate('Public');
          });
        }
      }
      else if (problem === 'TIMEOUT_ERROR') {
        ToastService.show('Please try again later!', null);
      }
    }
    else {
      const { profile } = data.data;
      actions.setData({ data: breederProfileMapper(profile) });
    }

    actions.setLoading({ isLoading: false });

  }),

};