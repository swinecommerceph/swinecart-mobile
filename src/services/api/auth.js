import API from './api';

const URL_PREFIX = '/auth';

export default {
  login({email, password}) {
    return API.post(`${URL_PREFIX}/login`, { email, password });
  },
  getLoggedInUser() {
    return API.get(`${URL_PREFIX}/me`);
  },
  logout() {
    return API.post(`${URL_PREFIX}/logout`);
  }
};