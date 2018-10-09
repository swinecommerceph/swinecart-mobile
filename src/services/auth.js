import API from './api';

const URL_PREFIX = '/auth'

const auth = {
  login({ email, password }) {
    return API.post(`${URL_PREFIX}/login`, { email, password });
  }
}

export default auth;