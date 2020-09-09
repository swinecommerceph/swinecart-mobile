import { action } from 'easy-peasy';

export const initialState = {
  items: null,
  page: 1,
  hasError: false,
  isLoadingMore: false,
  isLoading: true,
  isRefreshing: false,
};

export const utilActions = {
  resetState: action((state) => {
    state = initialState;
  }),

  setItems: action((state, payload) => {
    const { items = [], page } = payload;
    state.items = items;
    state.page = page;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setLoadingMore: action((state, payload) => {
    state.isLoadingMore = payload;
  }),
}