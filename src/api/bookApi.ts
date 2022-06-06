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
}

const getAllBooks = (options: QuerySearchOptions) => {
  return axios.get(`${bookPath}/all`, {
    params: options,
  });
};

const getAllGenres = () => {
  return axios.get(`${bookPath}/genres`);
};

export default {
  getAllBooks,
  getAllGenres,
};
