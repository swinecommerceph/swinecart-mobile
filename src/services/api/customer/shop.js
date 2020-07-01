import API from '../api';

const URL_PREFIX = 'customer/shop';

const service = {
  getItems(page, limit, filters) {
    return API.get(`${URL_PREFIX}/products`, { page, limit, ...filters });
  },
  getBreeds() {
    return API.get(`${URL_PREFIX}/breeds`);
  },
  getBreeders() {
    return API.get(`${URL_PREFIX}/breeders`);
  },
  getProductDetails(id) {
    return API.get(`/breeder/products/${id}/details`);
  },
  getProductMedia(id) {
    return API.get(`/breeder/products/${id}/media`);
  }
}

export default service;