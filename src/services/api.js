import axios from 'axios';

import {
  API_URL
} from 'react-native-dotenv';

// const API_URL = 'http://swinecart.test/api';

console.log('API_URL:', API_URL);

const instance = axios.create({
  baseURL: API_URL,
  timeout: 2000,
  headers: { 
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded' 
  },
});

instance.interceptors.response.use(
  response => response,
  err => {
    if(err && err.response && err.response.status === 401) {
      
    }
    return err;
  }
);

const api = {
  get(url, options = {}) {
    return instance.get(url, options);
  },
  delete(url, options = {}) {
    return instance.delete(url, options);
  },
  post(url, data = {}, options = {}) {
    return instance.post(url, data, options);
  },
  put(url, data = {}, options = {}) {
    return instance.put(url, data, options);
  }
};

export default api;