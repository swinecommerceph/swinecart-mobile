import API from '../api';

const URL_PREFIX = 'customer/shop';

const service = {
  getItems(page, limit, filters) {
    return API.get(`${URL_PREFIX}/products`, { page, limit, ...filters });
  },
  getFilters() {
    return API.get(`${URL_PREFIX}/filters`);
  },
}
export default service;