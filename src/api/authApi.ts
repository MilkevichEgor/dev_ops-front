import axios from './axios';
import { User, Token } from '../types';

type AuthResponse = {
  token: string;
  user: User
  message?: string;
}

type Options = {
  password: string;
  email: string;
}

const authPath = '/auth';
const userPath = '/user';

const checkToken = (data: Token) => {
  return axios.get<AuthResponse>(`${userPath}/me`, { data });
};

const signIn = (data: Options) => {
  return axios.post<AuthResponse>(`${authPath}/signin`, data);
};

const signUp = (data: Options) => {
  return axios.post<AuthResponse>(`${authPath}/signup`, data);
};

export default {
  signIn,
  signUp,
  checkToken,
};
