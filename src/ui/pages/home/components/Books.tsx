import React, { useEffect } from 'react';

import bookApi from '../../../../api/bookApi';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setBooks, setPagesQuantity } from '../../../../store/bookReducer';
import { QuerySearchOptions } from '../../../../types';
import BooksWrapper from '../../../styles/Books.styles';
import { setGenres } from '../../../../store/genreReducer';
import constants from '../../../../constants';
import useQuery from '../../../../utils/useQuery';
import BooksRender from '../../../components/BooksRender';

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [parsedParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    (async () => {
      try {
        const response = await bookApi.getAllBooks(parsedParams);

        dispatch(setBooks(response.data.books));
        const pagesQuantity = Math.ceil(
          response.data.pagesQuantity / constants.booksQuantityPerPage,
        );
        dispatch(setPagesQuantity(pagesQuantity));
      } catch (err) {
        console.log('ERROR >>', err);
      }
    })();
  }, [dispatch, parsedParams]);

  useEffect(() => {
    (async () => {
      const response = await bookApi.getAllGenres();
      dispatch(setGenres(response.data.genres));
    })();
  }, [dispatch]);

  return (
    <BooksWrapper>
      <BooksRender
        booksArray={books}
      />
    </BooksWrapper>
  );
};

export default BooksList;
