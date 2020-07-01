import { action, thunk, computed } from 'easy-peasy';
import to from 'await-to-js';
import { types } from 'constants/enums';
import { ShopService } from 'services';

export default {
  // State
  isLoading: true,
  hasError: false,

  breedOptions: null,
  breederOptions: null,

  selectedType: [],
  selectedBreeds: [],
  selectedBreeders: [],

  // Computed Values

  filters: computed(state => ({
    type: state.selectedType.map(({ row }) => types[row].key).join(','),
    breed: state.selectedBreeds.map(({ row }) => state.breedOptions[row].id).join(','),
    breeder: state.selectedBreeders.map(({ row }) => state.breederOptions[row].id).join(','),
  })),

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

  setSelectedType: action((state, payload) => {
    state.selectedType = payload;
  }),

  setSelectedBreeds: action((state, payload) => {
    state.selectedBreeds = payload;
  }),

  setSelectedBreeders: action((state, payload) => {
    state.selectedBreeders = payload;
  }),

  // Side Effects
  getFilterOptions: thunk(async (actions, payload) => {

    actions.setLoading(true);

    const [
      [, { data: { breeds } }], [, { data: { breeders } }]
    ] = await Promise.all([
      to(ShopService.getBreeds()),
      to(ShopService.getBreeders()),
    ]);

    actions.setFilterOptions({ 
      breederOptions: breeders,
      breedOptions: breeds
    });
    actions.setLoading(false);
  
  }),
};