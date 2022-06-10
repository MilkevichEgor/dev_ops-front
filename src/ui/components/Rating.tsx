import React from 'react';
import styled from 'styled-components';
import emptyStarIcon from '../images/Star.png';
import filledStarIcon from '../images/StarFilled.png';

const RatingWrapper = styled.div`
  .star {
    margin: 0 9px
  }
`;

const Rating = () => {
  const rate = 4;
  const arr = Array(5).fill(true).fill(rate, 0, rate);

  return (
    <RatingWrapper>
      {arr.map((grade: number) => {
        if (grade === rate) {
          return (
            <img
              key={grade}
              src={filledStarIcon}
              className="star"
            />
          );
        }
        return (
          <img
            key={grade}
            src={emptyStarIcon}
            className="star"
          />
        );
      })}
    </RatingWrapper>
  );
};

export default Rating;
