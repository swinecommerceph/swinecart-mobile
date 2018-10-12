import API from './api';

const URL_PREFIX = '/auth'

const service = {
  login({ email, password }) {
    return API.post(`${URL_PREFIX}/login`, { email, password });
  },
  me() {
    return API.get(`${URL_PREFIX}/me`);
  },
  logout() {
    return API.get(`${URL_PREFIX}/logout`);
  }
}

export default service;