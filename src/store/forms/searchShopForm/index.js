import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { types } from 'constants/enums';

import {
  ToastService,
  NavigationService,
  ShopService,
} from 'services';

import {
  validate,
  BaseForm,
} from '../utils';

import {
  initialState,
  schema,
} from './utils';

export default {

  ...(BaseForm()),

  // state
  schema,
  values: { ...initialState },

  filters: {},

  typeOptions: types,
  breedOptions: null,
  breederOptions: null,

  isLoading: {
    isSubmitting: false,
    isFetchingOptions: true,
  },


  setFilterOptions: action((state, payload) => {
    state.breedOptions = payload.breedOptions;
    state.breederOptions = payload.breederOptions;
  }),

  setFilters: action((state, payload) => {
    const { keyword, type, breed, breeder } = payload;

    state.filters = {
      q: keyword,
      type: type && type.map(t => t.key).join(','),
      breed: breed && breed.map(t => t.id).join(','),
      breeder: breeder && breeder.map(t => t.id).join(','),
    }

  }),

  // thunks

  resetForm: thunk(async (actions, payload) => {
    actions.setValues(initialState);
    actions.setFilters(initialState);
    actions.setTouched({});
    actions.setErrors({});
  }),

  submit: thunk(async (actions, payload, { getState, getStoreActions }) => {

    actions.setLoading({ isSubmitting: true });

    const { values } = getState();

    const formErrors = await actions.validateForm();

    if (!formErrors) {
      actions.setFilters(values);
      getStoreActions().shop.getItems({ isRefresh: true });
      ToastService.show('Searching...', () => {
          actions.setLoading({ isSubmitting: false });
          NavigationService.back();
        }
      );
      return;
    }

    actions.setLoading({ isSubmitting: false });
  }),

  clear: thunk(async (actions, payload, { getStoreActions }) => {
    actions.setLoading({ isSubmitting: true });
    actions.resetForm();
    getStoreActions().shop.getItems({ isRefresh: true });
    ToastService.show('Clearing filters...', () => {
        actions.setLoading({ isSubmitting: false });
        NavigationService.back();
      }
    );
  }),

  getFilterOptions: thunk(async (actions, payload) => {

    actions.setLoading({ isFetchingOptions: true });

    const [ error, data ] = await to(ShopService.getFilters());

    if (error) {

    }
    else {
      const { breeders, breeds } = data.data;

      actions.setFilterOptions({
        breederOptions: breeders,
        breedOptions: breeds
      });
    }

    actions.setLoading({ isFetchingOptions: false });

  }),

};