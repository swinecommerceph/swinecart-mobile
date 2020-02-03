import apisauce from 'apisauce';
import { API_URL } from 'react-native-dotenv';

const base = apisauce.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    // Accept: "application/json",
    // "Content-Type": "application/json",
  },
});

base.addResponseTransform(response => {

  const { ok, problem, status } = response;
  const { config, ...res } = response;

  if (!ok) {
    if (problem === 'NETWORK_ERROR') {  
    }
    if (problem === 'CLIENT_ERROR') {
    }
    if (problem === 'TIMEOUT_ERROR') {
    }
    if (problem === 'SERVER_ERROR') {
    }
  }

});

base.addMonitor(({ config: request, ...response }) => {
  const { headers: reqHeaders, data: reqData, url: endpoint } = request;
  const { headers: resHeaders, data: resData, duration: resDuration } = response;

  // console.dir('Request Headers: ', reqHeaders);
  // console.dir('Request Token:', reqHeaders.Authorization);
  // console.dir('Request Data: ', reqData);
  console.dir(resDuration, 'Request Endpoint:', endpoint);
  // console.dir(request);
  // console.dir('Response Data: ', resData);
  // console.dir('Response Headers: ', resHeaders);
});

const promiseHandler = response => {
  const { data, ok, problem, status } = response;

  return new Promise((resolve, reject) => {
    if (!ok && problem) {
      reject({ problem, status, data });
    }
    else {
      resolve(data);
    }
  });
};

const api = {

  setAuthToken(token) {
    base.setHeader('Authorization', token ? `Bearer ${token}` : null);
  },

  async get(url, params = {}, options = {}) {
    const response = await base.get(url, params, options);
    return promiseHandler(response);
  },
  async delete(url, params = {}, options = {}) {
    const response = await base.delete(url, params, options);
    return promiseHandler(response);
  },
  async post(url, data = {}, options = {}) {
    const response = await base.post(url, data, options);
    return promiseHandler(response);
  },
  async put(url, data = {}, options = {}) {
    const response = await base.put(url, data, options);
    return promiseHandler(response);
  },
  async patch(url, data = {}, options = {}) {
    const response = await base.patch(url, data, options);
    return promiseHandler(response);
  }
};


export default api;