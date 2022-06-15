import styled from 'styled-components';

const CommentsWrapper = styled.div`
  margin-top: 88px;



  .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  }
  
  .comment {
    display: flex;
    max-width: 783px;
    width: 100%;
    border-radius: 16px;
    background: #F0F4EF;
    margin: 10px 0;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin: 30px 20px 0 30px;
  }

  .content_block {
    margin: 35px 30px 25px 0;
  }

  .author_name {
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
`;
export default CommentsWrapper;
