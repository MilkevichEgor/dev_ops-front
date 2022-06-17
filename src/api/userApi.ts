import axios from './axios';
import { Token, AuthResponse } from '../types';

type UpdateUserDataType = {
  name?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
}

type UploadAvatarType = {
  img: string;
}

type FavoriteType = {
  book_id: number;
  user_id: number;
}

const userPath = '/user';

const updateUser = (id: number, data: UpdateUserDataType) => {
  return axios.patch(`${userPath}/${id}`, data);
};

const uploadAvatar = (data: UploadAvatarType) => {
  return axios.post(`${userPath}/upload-avatar`, data);
};

const checkToken = (data: Token) => {
  return axios.get<AuthResponse>(`${userPath}/me`, { data });
};

const toggleFavorite = (data: FavoriteType) => {
  return axios.post(`${userPath}/setFavorite`, { data });
};

export default {
  updateUser,
  uploadAvatar,
  checkToken,
  toggleFavorite,
};
