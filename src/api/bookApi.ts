import axios from './axios';

const bookPath = '/book';

const getAllBooks = () => {
  return axios.get(`${bookPath}/all`);
};

export default {
  getAllBooks,
};
