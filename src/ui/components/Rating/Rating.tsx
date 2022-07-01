import React, { useEffect, useState } from 'react';
import { Rating as RatingStars } from 'react-simple-star-rating';
import emptyStarIcon from '../../images/Star.png';
import filledStarIcon from '../../images/StarFilled.png';
import { useAppSelector } from '../../../store';
import bookApi from '../../../api/bookApi';
import RatingWrapper from './Rating.styles';

type RatingProps = {
  book_id: number,
  rate: number | 0,
  isChangeRating: boolean,
  handleChangeRating?: () => void,
}

const Rating: React.FC<RatingProps> = (props) => {
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
        return;
      }
      await bookApi.setRating({
        book_id: props.book_id,
        rating: newRate,
        user_id: user.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRating = (rate: number) => {
    setRating(rate / 20);
    if (!props.handleChangeRating) { return; }

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
