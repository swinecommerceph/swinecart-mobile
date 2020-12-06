import API from './api';

const URL_PREFIX = 'provinces';

const service = {
  getProvinces() {
    return API.get(`${URL_PREFIX}`);
  },
}

export default service;