import axios from './axios';
import { Token, AuthResponse, User } from '../types';
import config from '../config';

type UpdateUserDataType = {
  name?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
}

type UploadAvatarType = {
  img: string;
}

type UploadAvatarResponse = {
  message?: string;
  user: User;
}

const updateUser = (id: number, data: UpdateUserDataType) => {
  return axios.patch<UploadAvatarResponse>(`${config.userPath}/${id}`, data);
};

const uploadAvatar = (data: UploadAvatarType) => {
  return axios.post<{user: User}>(`${config.userPath}/upload-avatar`, data);
};

const checkToken = (data: Token) => {
  return axios.get<AuthResponse>(`${config.userPath}/me`, { data });
};

export default {
  updateUser,
  uploadAvatar,
  checkToken,
};
