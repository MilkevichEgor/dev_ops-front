import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { routePath } from '../../constants';
import { BooksArray, Book } from '../../types';
import CommonButton from './CommonButton';
import Rating from './Rating';
import BooksWrapper from '../styles/Books.styles';
import favoriteUnchoosenIcon from '../images/fav_unchoosen.png';
import favoriteChoosenIcon from '../images/favorites.png';
import { useAppSelector } from '../../store';
import userApi from '../../api/userApi';

type BookProps = {
  booksArray: BooksArray;
  wrap: 'wrap' | 'nowrap';
  handleFavorites?: (id: number) => void;
}

const BooksRender: React.FC<BookProps> = (props) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);
  const user = useAppSelector((state) => state.userReducer.user);

  useEffect(() => {
    const arr: number[] = [];
    props.booksArray.forEach((book) => {
      if (book.isInFavorite) {
        arr.push(book.bookId);
      }
    });
    setFavorites(arr);
  }, [props.booksArray]);

  const handleClickOnFavorite = async (book_id: number) => {
    if (!user) {
      navigate(routePath.signIn);
    }

    try {
      const indexInFavorites = favorites.indexOf(book_id);
      if (indexInFavorites !== -1) {
        await userApi.removeFromFavorite({ book_id });
        setFavorites((favorites) => favorites.filter((id) => {
          return id !== book_id;
        }));
        if (props.handleFavorites) {
          props.handleFavorites(book_id);
        }
      } else {
        await userApi.addToFavorite({ book_id });
        setFavorites([...favorites, book_id]);
      }
    } catch (err) {
      console.log('ERROR:', err);
    }
  };

  return (
    <BooksWrapper
      wrap={props.wrap}
    >
      {props.booksArray.map((book: Book) => {
        return (
          <div
            className="book"
            key={book.bookId}
          >
            <Link
              className="link"
              to={{ pathname: `${routePath.product}/${book.bookId}` }}>
              <img
                src={book.cover}
                className="cover"
                alt="book cover"
              />
              <p className="title">
                {book.title}
              </p>
            </Link>
            {favorites.includes(book.bookId)
              ? < img
                className="favorite"
                src={favoriteChoosenIcon}
                onClick={() => handleClickOnFavorite(book.bookId)}
              />
              : <img
                className="favorite"
                src={favoriteUnchoosenIcon}
                onClick={() => handleClickOnFavorite(book.bookId)}
              />
            }
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
