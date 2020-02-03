import API from '../api';

const URL_PREFIX = '/customer/profile';

const service = {
  async getFarms(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/farms`, { page, limit });
    return data;
  },
  async getFarm(id) {
    const { data } = await API.get(`${URL_PREFIX}/farms/${id}`);
    return data;
  },
}

export default service;