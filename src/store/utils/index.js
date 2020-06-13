import { action } from 'easy-peasy';

const initialState = {
  items: null,
  page: 1,
  hasFetchingError: false,
  isLoadingMore: false,
  isLoading: true,
  isRefreshing: false,
};

export const addGenericModel = () => ({

  ...initialState,

  resetState: action((state) => {
    state = initialState;
  }),

  setItems: action((state, payload) => {
    const { items = [], page = 1 } = payload;
    state.items = items;
    state.page = page;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setLoadingMore: action((state, payload) => {
    state.isLoadingMore = payload;
  }),

  setFetchingError: action((state, payload) => {
    state.hasFetchingError = payload;
  }),

});