import styled from 'styled-components';

type StylesProps = {
  isError?: boolean;
  isSuccess?: boolean;
}

const CommonInputWrapper = styled.div<StylesProps>`
  display: flex;
  background: #F0F4EF;
  border-radius: 16px;
  width: 522px;
  margin: 20px 0;
  cursor: text;
  border:  2px solid ${(props) => {
    if (props.isError) {
      return '#ED2E7E';
    }
    if (props.isSuccess) {
      return '#00966D';
    }

    return 'transparent';
  }};
  
  .input__icon {
    width: 24px;
    height: 100%;
    padding: 20px 16px 20px 24px;
  }

  .input__info-block {
    position: relative;
    padding: 6px 0;
  }

  .error {
    position: absolute;
    font-size: 14px;
    line-height: 24px;
    color: #C30052;
    top: 66px;
    left: -66px;
  }

  .input__info-name {
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.75px;
  }

  .input__info-value {
    font-family: 'Poppins',sans-serif;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.75px;
    line-height: 28px;
    background: inherit;
  }

  .input__input {
    border: none;
    outline: none;
    background: inherit;
    -webkit-box-shadow: inset 0 0 0 50px #f0f4ef;
  }

  .no-hint {
    display: flex;
   justify-content: center;
   align-items:center;
  }

  @media (max-width: 1279px) {
    max-width: 529px;
    width: 100%;
  }

  @media (max-width: 833px) {
    align-items: center;

    .input__icon {
      padding: 12px 16px 11px 24px;
    }

    .input__info-name {
      font-size: 12px;
      line-height: 24px;
    }

    .input__info-value {
      font-size: 14px;
    }

    .input__info-block {
      padding: 2px 0;
    }

    .no-hint {
      padding: 14px 0;
    }
  }
`;

export default CommonInputWrapper;
