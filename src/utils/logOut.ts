import Cookies from 'js-cookie';
import { store } from '../store';
import { setUser } from '../store/userReducer';

const logOut = () => {
  store.dispatch(setUser(null));

  Cookies.remove('token');
  Cookies.remove('refreshToken');
};

export default logOut;
