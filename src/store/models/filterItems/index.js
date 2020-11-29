import { action, thunk, computed } from 'easy-peasy';
import to from 'await-to-js';
import { types } from 'constants/enums';
import { ShopService } from 'services';

export default {
  // State
  isLoading: true,
  hasError: false,

  typeOptions: types,
  breedOptions: null,
  breederOptions: null,

  filters: {},

  // Computed Values

  // Actions
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setHasError: action((state, payload) => {
    state.hasError = payload;
  }),

  setFilterOptions: action((state, payload) => {
    state.breedOptions = payload.breedOptions;
    state.breederOptions = payload.breederOptions;
  }),

  setFilter: action((state, payload) => {
    const { keyword, type, breed, breeder } = payload;

    state.filters = {
      q: keyword,
      type: type && type.map(t => t.key).join(','),
      breed: breed && breed.map(t => t.id).join(','),
      breeder: breeder && breeder.map(t => t.id).join(','),
    }

  }),

  // Side Effects
  getFilterOptions: thunk(async (actions, payload) => {

    actions.setLoading(true);

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

    actions.setLoading(false);

  }),
};