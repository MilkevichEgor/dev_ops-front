import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Rating as RatingStars } from 'react-simple-star-rating';

import { useAppSelector } from '../../../store';
import bookApi from '../../../api/bookApi';
import { routePath } from '../../../constants';

import RatingWrapper from './Rating.styles';

import emptyStarIcon from '../../images/star.png';
import filledStarIcon from '../../images/star-filled.png';

type RatingProps = {
  bookId: number,
  rate: number | 0,
  isChangeRating: boolean,
  handleChangeRating?: () => void,
}

const Rating: React.FC<RatingProps> = (props) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userReducer.user);
  const [rating, setRating] = useState(props.rate);

  useEffect(() => {
    if (props.isChangeRating) {
      setRating(0);
    }
  }, [props.isChangeRating]);

  const updateRating = async (newRate: number) => {
    try {
      if (!user) {
        return navigate(routePath.signIn);
      }
      await bookApi.setRating({
        bookId: props.bookId,
        rating: newRate,
      });
    } catch (err) {
      toast.error('Sorry, setting rating is not available now', { autoClose: 3000 });
    }
  };

  const handleRating = (rate: number) => {
    setRating(rate / 20);
    if (!props.handleChangeRating) {
      return;
    }

    props.handleChangeRating();
    updateRating(rate / 20);
  };

  return (
    <RatingWrapper>
      <RatingStars
        onClick={handleRating}
        ratingValue={rating * 20}
        allowHalfIcon={false}
        readonly={!props.isChangeRating}
        fullIcon={(
          <img
            src={filledStarIcon}
            className="rating__star"
          />
        )}
        emptyIcon={(
          <img
            src={emptyStarIcon}
            className="rating__star"
          />
        )}
      />
    </RatingWrapper>
  );
};

export default Rating;
