import React from 'react';
import { Link } from 'react-router-dom';
import { routePath } from '../../constants';
import BooksWrapper from '../styles/Books.styles';
import CommonButton from './CommonButton';
import Rating from './Rating';
import { Book as BookType } from '../../types';

type BookProps = {
  booksArray: BookType[];
}

const BooksRender: React.FC<BookProps> = (props) => {
  return (
    <BooksWrapper>
      {props.booksArray.map((book: BookType) => {
        return (
          <div
            className="book"
            key={book.bookId}
          >
            <Link to={{ pathname: `${routePath.product}/${book.bookId}` }}>
              <img
                src={book.cover}
                className="cover"
                alt="book cover"
              />
              <p className="title">
                {book.title}
              </p>
            </Link>
            <p className="author">
              {book.author}
            </p>
            <div className="rating">
              <Rating
                rate={book.averageRate}
                isChangeRating={false}
                book_id={book.bookId}
              />
              <div className="average_rating">
                {book.averageRate}
              </div>
            </div>
            <CommonButton
              size="container"
              text={`$${book.price} USD`}
            />
          </div>
        );
      })}
    </BooksWrapper>
  );
};

export default BooksRender;
