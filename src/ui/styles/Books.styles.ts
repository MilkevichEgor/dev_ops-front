import styled from 'styled-components';

type StylesProps = {
  wrap: 'wrap' | 'nowrap';
}

const BooksWrapper = styled.div<StylesProps>`
  display: flex;
  ${(props) => (props.wrap === 'wrap'
    ? 'flex-wrap: wrap;'
    : `flex-wrap: nowrap;
      overflow: hidden;`
  )}
  margin-top: 50px;
  gap: 80px 20px;
  font-size: 20px;
  line-height: 30px;

  .book {
    position: relative;
    width: 305px;
    font-size: 20px;
    line-height: 30px;
  }

  .book__cover {
    height: 448px;
    width: 305px;
    border-radius: 16px;
  }

  .book__favorite {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }

  .book__title {
    color: #344966;
    margin: 30px 0 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  .book__author {
    color: #B9BAC4;
    margin: 0 0 20px 0;
  }

  .book__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    color: #B9BAC4;
    margin: 21px 0 32px 0;
  }

  .book__link {
    text-decoration: none;
  }

  @media (max-width: 1310px) {
    gap: 30px 20px;

    .book {
      width: 254px;
      font-size: 16px;
      line-height: 24px;
    }
    .book__cover {
      height: 372px;
      width: 254px;
    }

    .book__favorite {
      width: 38px;
      height: 38px;
      top: 16px;
      left: 16px;
    }
  }

  @media (max-width: 833px) {
    .book {
      width: 135px;
      font-size: 14px;
      line-height: 21px;
    }
    .book__cover {
      height: 192px;
      width: 135px;
    }

    .book__rating {
      margin: 15px 0 18px 0;
    }

    .book__average-rating {
      font-size: 12px;
      line-height: 20px;
    }

    .book__favorite {
      width: 25px;
      height: 25px;
      top: 16px;
      left: 19px;
    }
  }
`;

export default BooksWrapper;
