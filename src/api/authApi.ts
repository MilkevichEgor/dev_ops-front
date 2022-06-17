import axios from './axios';
import { AuthResponse } from '../types';

type AuthOptions = {
  password: string;
  email: string;
}

const authPath = '/auth';

const signIn = (data: AuthOptions) => {
  return axios.post<AuthResponse>(`${authPath}/signin`, data);
};

const signUp = (data: AuthOptions) => {
  return axios.post<AuthResponse>(`${authPath}/signup`, data);
};

export default {
  signIn,
  signUp,
};
