import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllBooksThunk } from '../../../../store/bookThunk';
import { getAllGenres } from '../../../../store/genreThunk';
import { QuerySearchOptions } from '../../../../types';
import useQuery from '../../../../utils/useQuery';
import BooksRender from '../../../components/Book/BooksRender';
import Loader from '../../../components/Loader/Loader';

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [parsedParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    (async () => {
      await dispatch(getAllBooksThunk({ options: parsedParams }));
      setIsLoading(false);
    })();
  }, [dispatch, parsedParams]);

  useEffect(() => {
    (async () => {
      dispatch(getAllGenres());
    })();
  }, [dispatch]);

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

// it makes sense to separate single components with logic?

export default BooksList;
