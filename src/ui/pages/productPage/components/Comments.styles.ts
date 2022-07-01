import styled from 'styled-components';

const CommentsWrapper = styled.div`
  margin-top: 88px;

  .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  }

  .comment {
    max-width: 783px;
    width: 100%;
    border-radius: 16px;
    background: #F0F4EF;
    margin: 10px 0;
    display: grid;
    grid-template-columns: 100px auto;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin: 30px 20px 0 30px;
  }

  .content-block {
    margin: 35px 30px 0 0;
  }

  .author-name {
    font-weight: 600;
    letter-spacing: 0.75px;
    color: #0D1821;
    margin: 0;
  }

  .date {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.75px;
    color: #B9BAC4;
    margin: 4px 0 9px 0;
  }

  .text {
    letter-spacing: 0.75px;
    color: #344966;
    margin-bottom: 25px;
    grid-column-start: 2;
    grid-column-end: 3
  }

  .textarea {
    box-sizing: border-box;
    border: none;
    margin: 60px 0 30px 0;
    padding: 20px 24px;
    resize: none;
    color: #344966;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
  }

  .textarea:focus {
    outline: none;
  }

  @media (max-width: 1279px) {
    .comments {
      max-width: 667px;
    }

    .comment__form {
      max-width: 738px;
      width: 100%;
    }
  }

  @media (max-width: 833px) {
    .comment {
      display: grid;
      grid-template-columns: 58px auto;
    }

    .avatar {
      width: 35px;
      height: 35px;
      margin: 13px 13px 0 10px;
      grid-row-start: 1;
    }

    .text {
      margin: 15px 0 10px 10px;
      grid-column-start: 1;
      grid-column-end: 3;
      font-size: 12px;
      line-height: 18px;
    }

    .content-block {
      margin-top: 10px;
    }

    .author-name {
      font-size: 14px;
      line-height: 21px;
    }

    .date {
      margin: 0;
      font-size: 10px;
      line-height: 15px;
    }

    .comment {
      font-weight: 400;
      font-size: 12px;
      line-height: 28px;
    }
  }
`;
export default CommentsWrapper;
