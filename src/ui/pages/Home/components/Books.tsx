import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommonButton from '../../../components/CommonButton';
import bookApi from '../../../../api/bookApi';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setBooks, setPagesQuantity } from '../../../../store/bookReducer';
import { Book } from '../../../../types';
import BooksWrapper from './Books.styles';
import { setGenres } from '../../../../store/genreReducer';
import getQueryParams from '../../../../utils/getQueryParams';

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = getQueryParams(searchParams);
    (async () => {
      try {
        const response = await bookApi.getAllBooks(search);
        dispatch(setBooks(response.data.books));
        dispatch(setPagesQuantity(response.data.pagesQuantity));
      } catch (err) {
        console.log('ERROR >>', err);
      }
    })();
  }, [dispatch, searchParams]);

  useEffect(() => {
    (async () => {
      const response = await bookApi.getAllGenres();
      dispatch(setGenres(response.data.genres));
    })();
  }, [dispatch]);

  return (
    <BooksWrapper>
      {books.map((book: Book) => {
        return (
          <div
            className="book"
            key={book.bookId}
          >
            <img src={book.cover} className="cover" alt="book cover" />
            <p
              className="title"
            >
              {book.title}
            </p>
            <p
              className="author"
            >
              {book.author}</p>
            <CommonButton
              text={`$${book.price} USD`}
            />
          </div>
        );
      }) || null}
    </BooksWrapper>
  );
};

export default BooksList;
