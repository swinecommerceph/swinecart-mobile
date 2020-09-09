import API from '../api';

const URL_PREFIX = 'customer/orders';

const service = {
  requestItem(id, requestData) {
    return API.post(`${URL_PREFIX}/${id}`, requestData);
  },
  getOrders(status, page = 1, limit = 10) {
    const statusText = {
      'requested': 'requested',
      'reserved': 'reserved',
      'onDelivery': 'on_delivery',
      'sold': 'sold',
    };
    return API.get(`${URL_PREFIX}`, { status: statusText[status], page, limit });
  },
  getOrder(id) {
    return API.get(`${URL_PREFIX}/${id}`);
  },
  getHistory(page = 1, limit = 10) {
    return API.get(`${URL_PREFIX}/history`, { page, limit });
  },
  reviewBreeder(id, requestData) {
    return API.post(`${URL_PREFIX}/reviews/${id}`, requestData);
  }
}

export default service;