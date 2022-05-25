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
  return axios.post<AuthReposnse>(`${path}/signin`, data);
};

const signUp = (data: Options) => {
  return axios.post<AuthReposnse>(`${path}/signup`, data);
};

export default {
  signIn,
  signUp,
};
