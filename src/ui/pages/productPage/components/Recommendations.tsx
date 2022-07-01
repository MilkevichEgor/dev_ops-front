import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import RecommendationsWrapper from './Recommendations.styles';
import BooksRender from '../../../components/Book/BooksRender';
import { getRecommendations } from '../../../../store/bookThunk';

const Recommendations = () => {
  const recommendedBooks = useAppSelector((state) => state.bookReducer.recommended);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getRecommendations());
    })();
  }, [dispatch]);

  return (
    <RecommendationsWrapper>
      <h1 className="recommendations__title">Recommendations</h1>
      <BooksRender
        wrap="nowrap"
        booksArray={recommendedBooks}
      />
    </RecommendationsWrapper>
  );
};

export default Recommendations;
