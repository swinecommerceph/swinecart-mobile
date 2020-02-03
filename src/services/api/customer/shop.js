import API from '../api';

const URL_PREFIX = 'customer/shop';

const service = {
  getItems(page, limit) {
    return API.get(`${URL_PREFIX}/products`, { page, limit });
  },
  getProductDetails(id) {
    return API.get(`/breeder/products/${id}/details`);
  },
  getProductMedia(id) {
    return API.get(`/breeder/products/${id}/media`);
  }
}

export default service;