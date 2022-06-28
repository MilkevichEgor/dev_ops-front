import Cookies from 'js-cookie';
import authApi from '../api/authApi';

const checkRefreshToken = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      throw new Error('No saved refresh token in cookies');
    }

    const response = await authApi.checkRefresh(refreshToken);
    Cookies.set('token', response.data.token);
    Cookies.set('refreshToken', response.data.refreshToken);
    return true;
  } catch (error) {
    return false;
  }
};

export default checkRefreshToken;
