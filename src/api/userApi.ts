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

type UpdateUserResponse = {
  user: User;
}

const updateUser = (id: number, data: UpdateUserDataType) => {
  return axios.patch<UpdateUserResponse>(`${config.userPath}/${id}`, data);
};

const uploadAvatar = (data: UploadAvatarType) => {
  return axios.post<UpdateUserResponse>(`${config.userPath}/upload-avatar`, data);
};

const checkToken = (data: Token) => {
  return axios.get<AuthResponse>(`${config.userPath}/me`, { data });
};

export default {
  updateUser,
  uploadAvatar,
  checkToken,
};
