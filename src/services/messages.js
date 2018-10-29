import API from './api';
import UserStore from '../mobx/stores/UserStore';

const service = {
  getThreads() {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/messages`;
    return API.get(`${URL_PREFIX}/threads`);
  },
  getMessages(id) {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/messages`;
    return API.get(`${URL_PREFIX}/${id}`);
  }
}

export default service;