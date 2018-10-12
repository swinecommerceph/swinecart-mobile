import API from './api';

const URL_PREFIX = '/breeder/products'

const service = {
  getProducts(page) {
    return API.get(`${URL_PREFIX}/get`, { params: { page } });
  },
  toggleStatus(id){
    return API.post(`${URL_PREFIX}/product/display/${id}`);
  }
}

export default service;