import API from './api';

const URL_PREFIX = '/auth'

const auth = {
  login({ email, password }) {
    return API.post(`${URL_PREFIX}/login`, { email, password });
  },
  me() {
    return API.get(`${URL_PREFIX}/me`);
  }
}

export default auth;