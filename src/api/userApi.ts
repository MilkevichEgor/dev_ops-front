import axios from './axios';
import { Token, AuthResponse } from '../types';
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

type toggleFavoritesType = {
  book_id: number;
}

const updateUser = (id: number, data: UpdateUserDataType) => {
  return axios.patch(`${config.userPath}/${id}`, data);
};

const uploadAvatar = (data: UploadAvatarType) => {
  return axios.post(`${config.userPath}/upload-avatar`, data);
};

const checkToken = (data: Token) => {
  return axios.get<AuthResponse>(`${config.userPath}/me`, { data });
};

const getFavorite = () => {
  return axios.get(`${config.userPath}/getFavorite`);
};

const addToFavorite = (data: toggleFavoritesType) => {
  return axios.post(`${config.userPath}/addToFavorites`, data);
};

const removeFromFavorite = (data: toggleFavoritesType) => {
  return axios.delete(`${config.userPath}/removeFromFavorites`, { data });
};

export default {
  updateUser,
  uploadAvatar,
  checkToken,
  getFavorite,
  addToFavorite,
  removeFromFavorite,
};
