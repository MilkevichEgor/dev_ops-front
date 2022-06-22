import React, { useEffect } from 'react';

import bookApi from '../../../../api/bookApi';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setBooks, setPagesQuantity } from '../../../../store/bookReducer';
import { QuerySearchOptions } from '../../../../types';
import { setGenres } from '../../../../store/genreReducer';
import constants from '../../../../constants';
import useQuery from '../../../../utils/useQuery';
import BooksRender from '../../../components/BooksRender';

const BooksList = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [parsedParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    (async () => {
      try {
        const response = await bookApi.getAllBooks({ options: parsedParams });

        dispatch(setBooks(response.data.books));
        const pagesQuantity = Math.ceil(
          response.data.totalCount / constants.booksQuantityPerPage,
        );
        dispatch(setPagesQuantity(pagesQuantity));
      } catch (err) {
        console.log('ERROR >>', err);
      }
    })();
  }, [dispatch, parsedParams, user]);

  useEffect(() => {
    (async () => {
      const response = await bookApi.getAllGenres();
      dispatch(setGenres(response.data.genres));
    })();
  }, [dispatch]);

  return (
    <BooksRender
      wrap="wrap"
      booksArray={books}
    />
  );
};

// it makes sense to separate single components with logic?

export default BooksList;
