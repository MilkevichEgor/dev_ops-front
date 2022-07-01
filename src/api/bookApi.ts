import { AxiosResponse } from 'axios';
import config from '../config';
import { Book, QuerySearchOptions } from '../types';
import axios from './axios';

export type SetRatingOptions = {
  bookId: number;
  rating: number;
}

export type AddCommentOptions = {
  bookId: number;
  text: string;
}

export type GetAllBooksOptions = {
  options: QuerySearchOptions;
}

type toggleFavoritesType = {
  bookId: number;
}

const getAllBooks = (data: GetAllBooksOptions) => {
  return axios.get(`${config.bookPath}/all`, {
    params: data.options,
  });
};

const getAllGenres = () => {
  return axios.get(`${config.bookPath}/genres`);
};

const getOneBook = (id: string): Promise<AxiosResponse<{ book: Book }>> => {
  return axios.get(`${config.bookPath}/${id}`);
};

const setRating = (data: SetRatingOptions) => {
  return axios.post(`${config.bookPath}/rate`, data);
};

const addComment = (data: AddCommentOptions) => {
  return axios.post(`${config.bookPath}/add-comment`, data);
};

const getRecommendations = () => {
  return axios.get(`${config.bookPath}/recommendations`);
};

const getFavorite = () => {
  return axios.get(`${config.bookPath}/favorites`);
};

const addToFavorite = (data: toggleFavoritesType) => {
  return axios.post(`${config.bookPath}/add-favorites`, data);
};

const removeFromFavorite = (data: toggleFavoritesType) => {
  return axios.delete(`${config.bookPath}/remove-favorites`, { data });
};

export default {
  getAllBooks,
  getAllGenres,
  getOneBook,
  setRating,
  addComment,
  getRecommendations,
  getFavorite,
  addToFavorite,
  removeFromFavorite,
};
