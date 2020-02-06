import API from '../api';

const URL_PREFIX = 'customer/transactions';

const service = {
  requestItem(id, requestData) {
    return API.post(`${URL_PREFIX}/${id}`, requestData);
  },
  getItems(status, page = 1, limit = 10) {
    const statusText = {
      'requested': 'requested',
      'reserved': 'reserved',
      'onDelivery': 'on_delivery',
      'sold': 'sold',
    };
    return API.get(`${URL_PREFIX}`, { status: statusText[status], page, limit });
  }
}

export default service;