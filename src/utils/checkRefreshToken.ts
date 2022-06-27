import Cookies from 'js-cookie';
import authApi from '../api/authApi';

const checkRefreshToken = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      throw new Error();
    }

    const response = await authApi.checkRefresh(refreshToken);
    Cookies.set('token', response.data.token);
    Cookies.set('refreshToken', response.data.refreshToken);
  } catch (error) {
    console.log('error >>>', error);
  }
};

export default checkRefreshToken;
