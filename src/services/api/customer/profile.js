import API from '../api';
import transform from '../../../transformers';

const URL_PREFIX = `/customer/profile`;

const service = {
  async changePassword(requestData) {
    const { data } = await API.patch(`${URL_PREFIX}/password`, transform('changePassword')(requestData));
    return data;
  },
  async getProfile() {
    const { data } = await API.get(`${URL_PREFIX}/`);
    return data;
  },
  updateProfile(data) {
    return API.post(`${URL_PREFIX}/update-personal`, data);
  }
}

export default service;