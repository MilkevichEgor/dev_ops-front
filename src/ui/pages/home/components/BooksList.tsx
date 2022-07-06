import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllBooksThunk } from '../../../../store/bookThunk';
import { getAllGenres } from '../../../../store/genreThunk';

import { QuerySearchOptions } from '../../../../types';
import useQuery from '../../../../utils/useQuery';

import BooksRender from '../../../components/Book';
import Loader from '../../../components/Loader';

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [parsedParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    (async () => {
      await dispatch(getAllGenres());
      await dispatch(getAllBooksThunk({ options: parsedParams }));
      setIsLoading(false);
    })();
  }, [dispatch, parsedParams]);

  return (
    <>
      {
        isLoading
          ? <Loader />
          : <BooksRender
            wrap="wrap"
            booksArray={books}
          />
      }
    </>

  );
};

export default BooksList;
