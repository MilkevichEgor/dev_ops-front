import React, { useEffect } from 'react';
import styled from 'styled-components';
import CommonButton from '../../../components/CommonButton';
import bookApi from '../../../../api/bookApi';
import config from '../../../../config';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setBooks } from '../../../../store/bookReducer';
import { Book } from '../../../../types';
import BooksWrapper from './BooksWrapper';

const div = styled.div`
  width: 305px;
  font-size: 20px;
  line-height: 30px;
  gap: 20px;

  .cover {
    height: 448px;
  }
`;

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  console.log('books', books);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await bookApi.getAllBooks();
        dispatch(setBooks(response.data.books));
      } catch (err) {
        console.log('ERROR >>', err);
      }
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
            <img src={`${config.apiBaseUrl}/book-cover/${book.cover}`} className="cover" alt="book cover" />
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
