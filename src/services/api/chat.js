import API from './api';

const service = {
  getThreads(page, limit) {
    return API.get(`/chats`, { page, limit });
  },
  getMessages(id, page, limit) {
    return API.get(`/chats/${id}`, { page, limit });
  }
}

export default service;