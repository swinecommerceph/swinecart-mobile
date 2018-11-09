import API from './api';
import UserStore from '../mobx/stores/UserStore';

const service = {
  getNotifs() {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}`;
    return API.get(`${URL_PREFIX}/notifications`);
  }
}

export default service;