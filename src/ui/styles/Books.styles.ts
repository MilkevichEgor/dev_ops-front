import styled from 'styled-components';

const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 80px 20px;
  font-size: 20px;
  line-height: 30px;

  .book {
    width: 305px;
    font-size: 20px;
    line-height: 30px;
  }

  .cover {
    height: 448px;
    width: 305px;
    border-radius: 16px;
  }

  .title {
    color: #344966;
    margin: 30px 0 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  .author {
    color: #B9BAC4;
    margin: 0 0 20px 0;
  }

  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    color: #B9BAC4;
    margin: 21px 0 32px 0;
  }

  @media (max-width: 1310px) {
    gap: 30px 20px;

    .book {
      width: 254px;
      font-size: 16px;
      line-height: 24px;
    }
    .cover {
      height: 372px;
      width: 254px;
    }
  }

  @media (max-width: 833px) {
    .book {
      width: 135px;
      font-size: 14px;
      line-height: 21px;
    }
    .cover {
      height: 192px;
      width: 135px;
    }

    .rating {
      margin: 15px 0 18px 0;
    }

    .average_rating {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

export default BooksWrapper;
