import styled from 'styled-components';

const ProductPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #0D1821;
  
  .cover {
    width: 522px;
    height: 779px;
    border-radius: 16px;
  }

  .book-info {
    max-width: 630px;
    width: 100%;
  }

  .title {
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .subtitle {
    margin: 0;
    font-size: 24px;
    line-height: 36px;
  }

  .rating {
    display: flex;
    height: 28px;
    margin: 30px 0;
  }

  .rating__averageRate {
    display: flex;
    margin-right: 41px;
  }

  .icon {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }

  .arrow {
    opacity: 0.2;
    margin: 0 10px 0 44px;
  }

  .updateRate {
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

  .button-block {
    display: flex;
    margin-top: 74px;
  }

  .button-block__description {
    color: #344966;
    margin: 0 0 14px 0;
  }

  .button-block__button {
    margin-right: 82px;
  }

  @media (max-width: 1279px) {
    .cover {
      width: 391px;
      height: 584px;
    }

    .title {
      font-size: 32px;
      line-height: 48px;
    }

    .subtitle {
      font-size: 20px;
      line-height: 30px;
    }

    .book-info {
      max-width: 392px;
    }

    .button-block {
      margin-top: 50 px;
    }

    .button-block__button {
      margin-right: 20px;
    }
  }
`;

export default ProductPageWrapper;
