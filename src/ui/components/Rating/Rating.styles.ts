import styled from 'styled-components';

export const RatingWrapper = styled.div`
  .rating__star {
    margin: 0 28px 0 0;
  }

  @media (max-width: 1279px) {
    .rating__star {
      width: 23px;
      height: 23px;
      margin: 0 17.5px 0 0;
    }
  }

  @media (max-width: 833px) {
    .rating__star {
      width: 14px;
      height: 14px;
      margin: 0 10px 0 0;
    }
  }
`;

export default RatingWrapper;
