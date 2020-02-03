import API from '../api';

const URL_PREFIX = '/breeder/profile';

const service = {
  getFarms() {
    return API.get(`${URL_PREFIX}/farms`);
  },
  getFarm(id) {
    return API.get(`${URL_PREFIX}/farms/${id}`);
  },
}

export default service;