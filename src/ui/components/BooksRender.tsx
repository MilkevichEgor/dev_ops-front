import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { routePath } from '../../constants';
import { Book as BookType } from '../../types';
import CommonButton from './CommonButton';
import Rating from './Rating';
import BooksWrapper from '../styles/Books.styles';
import favoriteUnchoosenIcon from '../images/fav_unchoosen.png';
import favoriteChoosenIcon from '../images/favorites.png';
import { useAppSelector } from '../../store';
import userApi from '../../api/userApi';

type BookProps = {
  booksArray: BookType[];
  wrap: boolean;
}

const BooksRender: React.FC<BookProps> = (props) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userReducer.user);
  const [favoriteBooks, setFavoritesBooks] = useState<number[]>([]);

  useEffect(() => {
    if (!user || !user.favorites) return;
    const favoriteBookIds = user.favorites.map((item) => item.book.bookId);
    setFavoritesBooks(favoriteBookIds);
  }, [user]);

  const handleClickOnFavorite = async (id: number) => {
    try {
      if (!user) {
        return navigate(`${routePath.signIn}`);
      }
      const response = await userApi.toggleFavorite({
        user_id: user.id,
        book_id: id,
      });
      if (response.status === 201) {
        const updateFavoritesArray = favoriteBooks.slice();
        updateFavoritesArray.push(id);
        setFavoritesBooks(updateFavoritesArray);
      }
      if (response.status === 200) {
        const updateFavoritesArray = favoriteBooks.filter((item) => {
          return item !== id;
        });
        setFavoritesBooks(updateFavoritesArray);
      }
    } catch (err) {
      console.log('err', err);
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
            {favoriteBooks.includes(book.bookId)
              ? <img
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
