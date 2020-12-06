import API from './api';

const URL_PREFIX = 'farms';

const service = {
  getFarms() {
    return API.get(`${URL_PREFIX}`);
  },
  addFarm(data) {
    return API.post(`${URL_PREFIX}`, data);
  },
  getFarm(id) {
    return API.get(`${URL_PREFIX}/${id}`);
  },
  updateFarm(id, data) {
    return API.put(`${URL_PREFIX}/${id}`, data);
  },
  deleteFarm(id) {
    return API.delete(`${URL_PREFIX}/${id}`);
  },
}

export default service;