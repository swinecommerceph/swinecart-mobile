import API from '../api';


const URL_PREFIX = '/breeder/products';

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
  updateProduct(id, data) {
    return API.put(`${URL_PREFIX}/${id}`, data);
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
    const formData = new FormData();

    formData.append('file', {
      name: photo.fileName,
      type: photo.type,
      uri: photo.uri,
    });

    return API.post(`${URL_PREFIX}/${id}/media`, formData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data;'
      }
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