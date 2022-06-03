import axios from './axios';

const bookPath = '/book';

type Options = {
  page?: string;
  limit?: string;
  genres?: string;
  priceFrom?: string;
  priceTo?: string;
  order?: string;
  orderDir?: string;
}

const getAllBooks = (options: Options) => {
  return axios.get(`${bookPath}/all`, {
    params: options,
  });
};

export default {
  getAllBooks,
};
