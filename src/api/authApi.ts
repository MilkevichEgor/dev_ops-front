import axios from './axios';
import { User, Token } from '../types';

type AuthResponse = {
  token: string;
  user: User
  message?: string;
}

type AuthOptions = {
  password: string;
  email: string;
}

const authPath = '/auth';
const userPath = '/user';

const checkToken = (data: Token) => {
  return axios.get<AuthResponse>(`${userPath}/me`, { data });
};

const signIn = (data: AuthOptions) => {
  return axios.post<AuthResponse>(`${authPath}/signin`, data);
};

const signUp = (data: AuthOptions) => {
  return axios.post<AuthResponse>(`${authPath}/signup`, data);
};

export default {
  signIn,
  signUp,
  checkToken,
};
