import styled from 'styled-components';

const ProductPageWrapper = styled.div`
  display: grid;
  column-gap: 128px;
  color: #0D1821;

  .cover {
    grid-row-start: 1;
    grid-row-end: 3;
  }
  
  .cover__img {
    width: 522px;
    height: 779px;
    border-radius: 16px;
  }

  .book-info {
    max-width: 630px;
    width: 100%;
    grid-row-start: 1;
  }

  .book-info__title {
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .book-info__subtitle {
    margin: 0;
    font-size: 24px;
    line-height: 36px;
  }

  .rating {
    display: flex;
    height: 28px;
    margin: 30px 0;
  }

  .rating__average {
    display: flex;
    margin-right: 41px;
  }

  .icon {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }

  .rating__arrow {
    opacity: 0.2;
    margin: 0 10px 0 44px;
    white-space: nowrap;
  }

  .rating__update {
    display: flex;
    align-items: center;
    color: #B9BAC4;
    cursor: pointer;
  }

  .description__text {
    font-size: 16px;
    line-height: 24px;
    color: #344966;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }

  .buttons-block {
    display: flex;
    column-gap: 74px;
  }

  .button-block__description {
    color: #344966;
    margin: 0 0 14px 0;
  }
  
  .button-block__button {
    width: 243px;
  }

  @media (max-width: 1279px) {
    column-gap: 21px;
    -webkit-column-gap: 21px;

    .cover__img {
      width: 391px;
      height: 584px;
    }

    .book-info__title {
      font-size: 32px;
      line-height: 48px;
    }

    .book-info__subtitle {
      font-size: 20px;
      line-height: 30px;
    }

    .book-info {
      max-width: 392px;
    }

    .buttons-block {
      margin-top: 50px;
      column-gap: 50px;
    }

    .button-block__button {
      width: 188px;
    }

    .icon {
      width: 23px;
      height: 23px;
    }

    .rating {
      flex-wrap: wrap;
      align-items: center;
      row-gap: 17px;
      margin-bottom: 90px;
    }

    .rating__arrow {
      margin: 0 10px 0 41px;
    }

    .rating__average {
      width: 100%;
    }
  }

  @media (max-width: 833px) {
    .cover__img {
      width: 135px;
      height: 202px;
    }

    .book-info__title {
      font-size: 18px;
      line-height: 20px;
      width: 135px;
    }

    .book-info__subtitle {
      font-size: 12px;
      line-height: 28px;
    }

    .icon {
      width: 14px;
      height: 14px;
    }

    .rating__arrow {
      display: none;
    }

    .rating {
      row-gap: 17px;
      margin-bottom: 90px;
    }

    .rating__update > p {
      font-size: 12px;
      line-height: 18px;
      margin: 0;
    }

    .description {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .description__title {
      font-size: 14px;
      line-height: 21px;
    }

    .description__text {
      font-size: 12px;
      line-height: 18px;
      max-width: 290px;
      width: 100%;
    }

    .buttons-block {
      margin-top: 30px;
      column-gap: 20px;
    }

    .button-block__button {
      width: 135px;
    }
  }
`;

export default ProductPageWrapper;
