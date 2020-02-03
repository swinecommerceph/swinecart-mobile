import API from '../api';

const URL_PREFIX = 'customer/cart';

const service = {
  addItem(id) {
    return API.post(`${URL_PREFIX}/items/${id}`);
  },
  removeItem(id) {
    return API.delete(`${URL_PREFIX}/items/${id}`);
  },
  getItems(page, limit) {
    return API.get(`${URL_PREFIX}/items`, { page, limit });
  },
}

export default service;