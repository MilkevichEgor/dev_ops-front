import axios from './axios';
import { AuthResponse } from '../types';

type AuthOptions = {
  password: string;
  email: string;
}

type CheckRefreshResponse = {
  token: string;
  refreshToken: string;
}

const authPath = '/auth';

const signIn = (data: AuthOptions) => {
  return axios.post<AuthResponse>(`${authPath}/signin`, data);
};

const signUp = (data: AuthOptions) => {
  return axios.post<AuthResponse>(`${authPath}/signup`, data);
};

const checkRefresh = (refreshToken: string) => {
  return axios.post<CheckRefreshResponse>(`${authPath}/check-token`, { refreshToken });
};

export default {
  signIn,
  signUp,
  checkRefresh,
};
