import Cookies from 'js-cookie';

import { store } from '../store';
import { setUser } from '../store/userReducer';

import constants from '../constants';

const logOut = () => {
  store.dispatch(setUser(null));

  Cookies.remove(constants.token.access);
  Cookies.remove(constants.token.refresh);
};

export default logOut;
