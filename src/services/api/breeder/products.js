import API from '../api';


const URL_PREFIX = '/breeder/products'

const service = {
  getProducts(page, limit = 1000) {
    return API.get(`${URL_PREFIX}`, { page, limit });
  },
  getProductDetails(id) {
    return API.get(`${URL_PREFIX}/${id}/details`);
  },
  addProduct(data) {
    return API.post(`${URL_PREFIX}`, data);
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
  getProductMedia(id) {
    return API.get(`${URL_PREFIX}/${id}/media`);
  },
  addMedia(id, photo) {
    const data = new FormData();
    data.append('file', photo);
    return API.post(`${URL_PREFIX}/${id}/media`, { file: data }, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  setPrimaryPicture(id, data) {
    return API.patch(`${URL_PREFIX}/${id}/media`, data);
  },
  deleteMedia(id, data) {
    return API.delete(`${URL_PREFIX}/${id}/media`, data);
  },
}

export default service;