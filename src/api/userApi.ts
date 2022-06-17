import axios from './axios';
import { Token, AuthResponse } from '../types';

type UpdateUserData = {
  name?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
}

type UploadAvatar = {
  img: string;
}

const userPath = '/user';

const updateUser = (id: number, data: UpdateUserData) => {
  return axios.patch(`${userPath}/${id}`, data);
};

const uploadAvatar = (data: UploadAvatar) => {
  return axios.post(`${userPath}/upload-avatar`, data);
};

const checkToken = (data: Token) => {
  return axios.get<AuthResponse>(`${userPath}/me`, { data });
};

export default {
  updateUser,
  uploadAvatar,
  checkToken,
};
