import { AxiosResponse } from 'axios';
import config from '../config';
import { Book, QuerySearchOptions } from '../types';
import axios from './axios';

export type SetRatingOptions = {
  book_id: number;
  rating: number;
  user_id: number;
}

export type AddCommentOptions = {
  book_id: number;
  text: string;
  user_id: number;
}

export type GetAllBooksOptions = {
  options: QuerySearchOptions;
}

const getAllBooks = (data: GetAllBooksOptions) => {
  return axios.get(`${config.bookPath}/all`, {
    params: data.options,
  });
};

const getAllGenres = () => {
  return axios.get(`${config.bookPath}/genres`);
};

const searchForValue = (options: QuerySearchOptions) => {
  return axios.get(`${config.bookPath}/search`, {
    params: options,
  });
};

const getOneBook = (id: string): Promise<AxiosResponse<{book: Book}>> => {
  return axios.get(`${config.bookPath}/${id}`);
};

const setRating = (data: SetRatingOptions) => {
  return axios.post(`${config.bookPath}/rate`, data);
};

const addComment = (data: AddCommentOptions) => {
  return axios.post(`${config.bookPath}/addComment`, data);
};

const getRecommendations = () => {
  return axios.get(`${config.bookPath}/recommendations`);
};

export default {
  getAllBooks,
  getAllGenres,
  getOneBook,
  searchForValue,
  setRating,
  addComment,
  getRecommendations,
};
