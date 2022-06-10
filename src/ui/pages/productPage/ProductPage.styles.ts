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
`;

export default ProductPageWrapper;
