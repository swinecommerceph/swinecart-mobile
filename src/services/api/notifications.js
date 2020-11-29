import API from './api';
import { lowerCase } from 'lodash';

const service = {
  getNotifications(page, limit) {
    return API.get(`/notifications`, { page, limit });
  },
  seeNotif(id) {
    return API.patch(`/notifications/${id}`);
  }
}

export default service;