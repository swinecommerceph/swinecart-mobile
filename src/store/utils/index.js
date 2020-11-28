import { action } from 'easy-peasy';

const initialState = {
  items: null,
  page: 1,
  isLoading: true,
  isRefreshing: false,
  isLoadingMore: false,
  hasFetchingError: false,
};

export const BaseModel = () => ({

  ...initialState,

  resetState: action((state) => {
    state = initialState;
  }),

  setItems: action((state, payload) => {
    const { items = [], page = 1 } = payload;
    state.items = items;
    state.page = page;
  }),

  setLoadingMore: action((state, payload) => {
    state.isLoadingMore = payload;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setRefreshing: action((state, payload) => {
    state.isRefreshing = payload;
  }),

  setFetchingError: action((state, payload) => {
    state.hasFetchingError = payload;
  }),

});