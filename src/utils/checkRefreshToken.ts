import Cookies from 'js-cookie';

import authApi from '../api/authApi';

import constants from '../constants';

const checkRefreshToken = async () => {
  try {
    const refreshToken = Cookies.get(constants.token.refresh);
    if (!refreshToken) {
      throw new Error('No saved refresh token in cookies');
    }

    const response = await authApi.checkRefresh(refreshToken);

    Cookies.set(constants.token.access, response.data.token);
    Cookies.set(constants.token.refresh, response.data.refreshToken);

    return true;
  } catch (error) {
    return false;
  }
};

export default checkRefreshToken;
