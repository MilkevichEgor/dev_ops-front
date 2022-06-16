import { AxiosResponse } from 'axios';
import { Book, QuerySearchOptions } from '../types';
import axios from './axios';

const bookPath = '/book';

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

const getAllBooks = (options: QuerySearchOptions) => {
  return axios.get(`${bookPath}/all`, {
    params: options,
  });
};

const getAllGenres = () => {
  return axios.get(`${bookPath}/genres`);
};

const searchForValue = (options: QuerySearchOptions) => {
  return axios.get(`${bookPath}/search`, {
    params: options,
  });
};

const getOneBook = (id: string): Promise<AxiosResponse<{book: Book}>> => {
  return axios.get(`${bookPath}/${id}`);
};

const setRating = (data: SetRatingOptions) => {
  return axios.post(`${bookPath}/rate`, data);
};

const addComment = (data: AddCommentOptions) => {
  return axios.post(`${bookPath}/addComment`, data);
};

export default {
  getAllBooks,
  getAllGenres,
  getOneBook,
  searchForValue,
  setRating,
  addComment,
};
