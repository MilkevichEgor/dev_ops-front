import { AxiosResponse } from 'axios';
import { Book } from '../types';
import axios from './axios';

const bookPath = '/book';

export type QuerySearchOptions = {
  page?: string;
  limit?: string;
  genres?: string;
  priceFrom?: string;
  priceTo?: string;
  order?: string;
  orderDir?: string;
  value?: string;
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

export default {
  getAllBooks,
  getAllGenres,
  getOneBook,
  searchForValue,
};
