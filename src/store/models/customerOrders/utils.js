export function getOrderObject(state, status) {
  return state.ordersByStatus[status];
}

export const orderObject = {
  items: null,
  page: 1,
  hasError: false,
  isLoadingMore: false,
  isRefreshing: false,
  isLoading: true,
};