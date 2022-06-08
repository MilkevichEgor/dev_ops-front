import { QuerySearchOptions } from '../api/bookApi';

const getQueryParams = (searchParams: URLSearchParams) => {
  const query = {} as QuerySearchOptions;
  searchParams.forEach((value, key) => {
    Object.assign(query, { [key]: value });
  });

  return query;
};

export default getQueryParams;
