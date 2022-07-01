import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import bookApi from '../../../api/bookApi';
import { Book, RatingObj } from '../../../types';
import CommonButton from '../../components/CommonButton/CommonButton';
import Rating from '../../components/Rating/Rating';
import CommonWrapper from '../../styles/CommonWrapper.styles';
import ProductPageWrapper from './ProductPage.styles';
import filledStarIcon from '../../images/StarFilled.png';
import backArrow from '../../images/backArrow.png';
import { useAppSelector } from '../../../store';
import Comments from './components/Comments';
import AuthProtector from '../../components/AuthProtector';
import AuthorizeBanner from '../../components/AuthorizeBanner/AuthorizeBanner';
import Recommendations from './components/Recommendations';
import { routePath } from '../../../constants';

const ProductPage = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>();
  const [isChangeRating, setIsChangeRating] = useState(false);
  const user = useAppSelector((state) => state.userReducer.user);
  const params = useParams();

  const setBookInState = (book: Book) => {
    setBook(book);
  };

  useEffect(() => {
    try {
      (async () => {
        if (!params.id) return;
        const response = await bookApi.getOneBook(params.id);
        setBookInState(response.data.book);
      })();
    } catch (err) {
      console.log('ERROR', err);
    }
  }, [params.id]);

  if (!book) return null;

  const handleChangeRating = () => {
    if (!user) {
      return navigate(routePath.signIn);
    }

    setIsChangeRating(!isChangeRating);
  };

  const currentUserRating = user?.ratings?.find((item: RatingObj) => {
    return item.book.bookId === book.bookId;
  });
  return (
    <CommonWrapper>
      <ProductPageWrapper>
        <div className="cover">
          <img
            className="cover__img"
            src={book.cover}
          />
        </div>
        <div className="book-info">
          <p className="book-info__title">
            {book.title}
          </p>
          <p className="book-info__subtitle">
            {book.author}
          </p>
          <div className="rating">
            <div className="rating__average">
              <img
                src={filledStarIcon}
                className="icon"
              />
              <div className="rating__update">
                {book.averageRate}
              </div>
            </div>
            <Rating
              book_id={book.bookId}
              rate={currentUserRating?.rating || 0}
              isChangeRating={isChangeRating}
              handleChangeRating={handleChangeRating}
            />
            <div
              className="rating__update"
              onClick={handleChangeRating}
            >
              <img className="rating__arrow" src={backArrow} />
              {isChangeRating || !currentUserRating?.rating
                ? <p>Rate this book</p>
                : <p>Update rating</p>}
            </div>
          </div>
        </div>
        <div className="description">
          <p className="book-info__subtitle description__title">
            Description
          </p>
          <p className="description__text">
            {book.description}
          </p>
          <div className="buttons-block">
            <div className="button-block__button">
              <p className="button-block__description">
                Paperback
              </p>
              <CommonButton
                size="container"
                text="Not available"
              />
            </div>
            <div className="button-block__button">
              <p className="button-block__description">
                Hardcover
              </p>
              <CommonButton
                size="container"
                text={`$ ${book.price} USD`}
              />
            </div>
          </div>
        </div>
      </ProductPageWrapper>
      <Comments
        setBookInState={setBookInState}
        book={book}
      />
      <AuthProtector
        noAuthOnly
      >
        <AuthorizeBanner />
      </AuthProtector>
      <Recommendations />
    </CommonWrapper>
  );
};

export default ProductPage;
