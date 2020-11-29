import API from './api';

const URL_PREFIX = 'profile';

const service = {
  getProfile() {
    return API.get(`${URL_PREFIX}`);
  },
}

export default service;