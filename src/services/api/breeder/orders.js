import API from '../api';

const URL_PREFIX = '/breeder';

const service = {
  getOrders(status, page = 1, limit = 1000) {
    const statusText = {
      'requested': 'requested',
      'reserved': 'reserved',
      'onDelivery': 'on_delivery',
      'sold': 'sold',
    };
    return API.get(`${URL_PREFIX}/orders/${statusText[status]}`, { page, limit });
  },
  getOrderRequests(id, page = 1, limit = 1000) {
    return API.get(`${URL_PREFIX}/orders/${id}/requests`, { page, limit });
  },
  reserveProduct(requestData) {
    return API.post(`${URL_PREFIX}/orders/${requestData.product_id}/order-status`, requestData);
  },
  sendForDelivery(requestData) {
    return API.post(`${URL_PREFIX}/orders/${requestData.product_id}/order-status`, requestData);
  },
  cancelTransaction(requestData) {
    return API.delete(`${URL_PREFIX}/orders/${requestData.product_id}/order-status`, requestData);
  },
  confirmSold(requestData) {
    return API.post(`${URL_PREFIX}/orders/${requestData.product_id}/order-status`, requestData);
  },
  removeRequest(id) {
    return API.delete(`${URL_PREFIX}/orders/${id}/requests`);
  },
}

export default service;