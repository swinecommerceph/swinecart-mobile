import API from './api';
import { lowerCase } from 'lodash';

const service = {
  getNotifications(accountType, page, limit) {
    return API.get(`${lowerCase(accountType)}/notifications`, { page, limit });
  },
  seeNotif(accountType, id) {
    return API.patch(`${lowerCase(accountType)}/notifications/${id}`);
  }
}

export default service;