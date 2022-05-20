import { AxiosResponse } from 'axios';
import axios from './axios';

type User = {
  dob: string;
  email: string;
  id: number;
  name: string;
  role: string;
}

type AuthReposnse = {
  token: string;
  user: User
  message: string;
}

type Options = {
  password: string;
  email: string;
}

const path = '/auth';

const signIn = (data: Options) => {
  return axios.post<AxiosResponse<AuthReposnse>>(`${path}/signIn`, data);
};

const signUp = (data: Options) => {
  return axios.post<AxiosResponse<AuthReposnse>>(`${path}/signUp`, data);
};

export default {
  signIn,
  signUp,
};
