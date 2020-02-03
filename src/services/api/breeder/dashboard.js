import API from '../api';

const URL_PREFIX = '/breeder/dashboard';

const service = {
  getStats() {
    return API.get(`${URL_PREFIX}/stats`);
  },
  getRatings() {
    return API.get(`${URL_PREFIX}/ratings`);
  },
  getReviews(page, limit) {
    return API.get(`${URL_PREFIX}/reviews`, { page, limit });
  },
  getReviewCount() {
    return API.get(`${URL_PREFIX}/reviews/count`);
  }
}

export default service;