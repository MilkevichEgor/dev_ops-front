import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px;
  font-family: 'Poppins';

  .title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
  }

  .form {
    display: flex;
    background-color: #F0F4EF;
    border-radius: 16px;
    align-items: center;
    width: 413px;
    margin-top: 30px
  }

  .input-wrapper {
    margin: 30px 0 60px 0;
  }

  .form__icon {
    padding: 20px 24px;
  }
  
  .form__input {
    outline: none;
    border: none;
    background-color: inherit;
  }

  .form__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.75px;
    margin: 9px 0;
  }

  .button {
    border: none;
    padding: 0;
    text-align: center;
    display: inline-flex;
    background-color: inherit;
    font-family: 'Poppins';
  }
  
  .sign-up-button {
    padding: 10px 42px;
  }

  @media (max-width: 1279px) {
    margin: 15px;

    .title {
      font-size: 32px;
      line-height: 48px;
    }

    .image {
      width: 390px;
      height: 333px;
    }
  }

  @media (max-width: 833px) {
    flex-direction: column;
    margin: 0;

    .form-wrapper {
      max-width: 290px;
      width: 100%;
    }

    .title {
      font-size: 18px;
      line-height: 27px;
    }

    .input-wrapper {
      margin: 10px 0 20px 0;
    }

    .image {
      width: 290px;
      height: 247px;
    }

    .question {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export default Wrapper;
