import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllBooksThunk } from '../../../../store/bookThunk';
import { getAllGenres } from '../../../../store/genreThunk';
import { QuerySearchOptions } from '../../../../types';
import useQuery from '../../../../utils/useQuery';
import BooksRender from '../../../components/Book/BooksRender';

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [parsedParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    (async () => {
      const loadingToast = toast.loading('Please wait...');
      dispatch(getAllBooksThunk({ options: parsedParams })).then(() => {
        toast.dismiss(loadingToast);
      }).catch(() => {
        toast.update(loadingToast, {
          render: 'Sorry, we were unable to download the books, something went wrong...',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
        });
      });
    })();
  }, [dispatch, parsedParams]);

  useEffect(() => {
    (async () => {
      dispatch(getAllGenres()).catch(() => {
        toast.error('Sorry, we were unable to download the genres, something went wrong...', {
          autoClose: 5000,
        });
      });
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
