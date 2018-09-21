import axios from 'axios';
import { 
  API_URL
} from 'react-native-dotenv';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 3000
});

instance.interceptors.response.use(response => {
  return response;
}, error => {

});

export const http = instance;