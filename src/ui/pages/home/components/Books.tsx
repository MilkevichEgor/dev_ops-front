import React, { useEffect } from 'react';
import styled from 'styled-components';
import CommonButton from '../../../components/CommonButton';
import bookApi from '../../../../api/bookApi';
import config from '../../../../config';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setBooks } from '../../../../store/bookReducer';
import { Book } from '../../../../types';
import BooksWrapper from './BooksWrapper';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

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
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
   searchParams.forEach(par => {
     console.log('PAR', par)
   });
    (async () => {
      try {
        const response = await bookApi.getAllBooks({});
        dispatch(setBooks(response.data.books));
      } catch (err) {
        console.log('ERROR >>', err);
      }
    })();
  }, [dispatch, searchParams]);

  return (
    <BooksWrapper>
      <button onClick={() => setSearchParams({...searchParams, test: 'lala'}, {replace: false})}>set</button>
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
