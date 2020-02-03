import API from './api';
import lowerCase from 'lodash/lowerCase';

const service = {
  getThreads(accountType, page, limit) {
    return API.get(`${lowerCase(accountType)}/chats`, { page, limit });
  },
  getMessages(accountType, id, page, limit) {
    return API.get(`${lowerCase(accountType)}/chats/${id}`, { page, limit });
  }
}

export default service;