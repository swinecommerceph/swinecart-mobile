import API from './api';

const URL_PREFIX = 'farms';

const service = {
  getFarms() {
    return API.get(`${URL_PREFIX}`);
  },
}

export default service;