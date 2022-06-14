import axios from 'axios';
import Cookies from 'js-cookie';
import config from '../config';

const instance = axios.create({
  baseURL: config.apiBaseUrl,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use((response) => {
  if (response.data === 'OK') {
    return response;
  }

  if ('token' in response.data) {
    Cookies.set('token', response.data.token);
  }

  return response;
});
export default instance;
