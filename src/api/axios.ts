import axios from 'axios';
import Cookies from 'js-cookie';

import config from '../config';
import constants from '../constants';

import checkRefreshToken from '../utils/checkRefreshToken';
import logOut from '../utils/logOut';

const instance = axios.create({
  baseURL: config.apiBaseUrl,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get(constants.token.access);
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

let isCheckRefreshJWTSend: Promise<boolean> | null = null;

instance.interceptors.response.use((response) => {
  if (response.data === 'OK') {
    return response;
  }

  if ('token' in response.data) {
    Cookies.set(constants.token.access, response.data.token);
    Cookies.set(constants.token.refresh, response.data?.refreshToken);
  }

  return response;
}, async (err) => {
  if (
    err.response.status === 401 &&
    err.response.data.data.message === 'Token expired'
  ) {
    if (!isCheckRefreshJWTSend) {
      isCheckRefreshJWTSend = checkRefreshToken();
    }
    const isChecked = await isCheckRefreshJWTSend;
    if (isChecked) {
      const req = { ...err.config };
      req.headers.authorization = `Bearer ${Cookies.get(constants.token.access)}`;

      isCheckRefreshJWTSend = null;

      return axios.request(req);
    }
  } else if (
    err.response.status === 401 &&
    err.response.data.data.message === 'Refresh token expired'
  ) {
    return logOut();
  }

  return Promise.reject(err);
});

export default instance;
