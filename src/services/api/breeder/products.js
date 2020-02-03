import API from '../api';


const URL_PREFIX = '/breeder/products'

const service = {
  getProducts(page, limit = 1000) {
    return API.get(`${URL_PREFIX}`, { page, limit });
  },
  getProductDetails(id) {
    return API.get(`${URL_PREFIX}/${id}/details`);
  },
  addProduct(requestData) {
    return API.post(`${URL_PREFIX}`, requestData);
  },
  deleteProduct(id) {
    return API.delete(`${URL_PREFIX}?ids=${id}`);
  },
  toggleStatus(id) {
    return API.patch(`${URL_PREFIX}/${id}/status`);
  },
  getProductMedia(id) {
    return API.get(`${URL_PREFIX}/${id}/media`);
  },
}

export default service;