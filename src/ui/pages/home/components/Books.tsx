import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllBooksThunk } from '../../../../store/bookThunk';
import { getAllGenres } from '../../../../store/genreThunk';
import { QuerySearchOptions } from '../../../../types';
import useQuery from '../../../../utils/useQuery';
import BooksRender from '../../../components/BooksRender';

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [parsedParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    (async () => {
      dispatch(getAllBooksThunk({ options: parsedParams }));
    })();
  }, [dispatch, parsedParams]);

  useEffect(() => {
    (async () => {
      dispatch(getAllGenres());
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
