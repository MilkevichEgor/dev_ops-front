import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import bookApi from '../../../api/bookApi';
import { useAppSelector } from '../../../store';
import { routePath } from '../../../constants';
import { BooksArray, BookType } from '../../../types';

import CommonButton from '../CommonButton';
import Rating from '../Rating';
import BooksWrapper from './Books.styles';

import favoriteUnchoosenIcon from '../../images/fav-unchoosen.png';
import favoriteChoosenIcon from '../../images/favorites.png';

type BookProps = {
  booksArray: BooksArray;
  wrap: 'wrap' | 'nowrap';
  handleFavorites?: (id: number) => void;
}

const BooksRender: React.FC<BookProps> = (props) => {
  const navigate = useNavigate();
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);
  const user = useAppSelector((state) => state.userReducer.user);

  useEffect(() => {
    const updatedFavoritesIds: number[] = [];
    props.booksArray.forEach((book) => {
      if (book.isInFavorite) {
        updatedFavoritesIds.push(book.bookId);
      }
    });
    setFavoritesIds(updatedFavoritesIds);
  }, [props.booksArray]);

  const handleClickOnFavorite = async (bookId: number) => {
    try {
      if (!user) {
        return navigate(routePath.signIn);
      }
      const indexInFavorites = favoritesIds.indexOf(bookId);
      if (indexInFavorites !== -1) {
        await bookApi.removeFromFavorite({ bookId });
        setFavoritesIds((favorites) => favorites.filter((id) => {
          return id !== bookId;
        }));
        if (props.handleFavorites) {
          props.handleFavorites(bookId);
        }
      } else {
        await bookApi.addToFavorite({ bookId });
        setFavoritesIds([...favoritesIds, bookId]);
      }
    } catch (err) {
      toast.error('Sorry, changing favorites is not available now', { autoClose: 3000 });
    }
  };

  return (
    <BooksWrapper
      wrap={props.wrap}
    >
      {props.booksArray.map((book: BookType) => {
        return (
          <div
            className="book"
            key={book.bookId}
          >
            <Link
              className="book__link"
              to={{ pathname: routePath.createProductURL(book.bookId.toString()) }}>
              <img
                src={book.cover}
                className="book__cover"
              />
              <p className="book__title">
                {book.title}
              </p>
            </Link>
            {favoritesIds.includes(book.bookId)
              ? (<img
                className="book__favorite"
                src={favoriteChoosenIcon}
                onClick={() => handleClickOnFavorite(book.bookId)}
              />)
              : (<img
                className="book__favorite"
                src={favoriteUnchoosenIcon}
                onClick={() => handleClickOnFavorite(book.bookId)}
              />)
            }
            <p className="book__author">
              {book.author}
            </p>
            <div className="book__rating">
              <Rating
                rate={book.averageRate}
                isChangeRating={false}
                bookId={book.bookId}
              />
              <div className="book__average-rating">
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
