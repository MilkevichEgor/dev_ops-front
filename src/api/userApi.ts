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

type toggleFavoritesType = {
  book_id: number;
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

const getFavorite = () => {
  return axios.get(`${userPath}/getFavorite`);
};

const addToFavorite = (data: toggleFavoritesType) => {
  return axios.post(`${userPath}/addToFavorites`, data);
};

const removeFromFavorite = (data: toggleFavoritesType) => {
  return axios.delete(`${userPath}/removeFromFavorites`, { data });
};

export default {
  updateUser,
  uploadAvatar,
  checkToken,
  getFavorite,
  addToFavorite,
  removeFromFavorite,
};
