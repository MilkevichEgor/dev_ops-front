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
  }

  .author {
    color: #B9BAC4
    margin: 0 0 20px 0;
  }
`;

export default BooksWrapper;
