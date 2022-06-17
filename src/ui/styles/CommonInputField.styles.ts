import styled from 'styled-components';

type StylesProps = {
  isError?: boolean;
  isSuccess?: boolean;
}

// (props.isError ? '#ED2E7E' : 'transparent')

const CommonInputWrapper = styled.div<StylesProps>`
  display: flex;
  background: #F0F4EF;
  border-radius: 16px;
  width: 522px;
  margin: 20px 0;
  border:  2px solid ${(props) => {
    if (props.isError) {
      return '#ED2E7E';
    }
    if (props.isSuccess) {
      return '#00966D';
    }

    return 'transparent';
  }};
  
  .icon {
    width: 24px;
    height: 100%;
    padding: 20px 16px 20px 24px;
  }

  .info__general {
    margin-bottom: 30px;
  }

  .info__row {
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

  .info__row-name {
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.75px;
  }

  .info__row-value {
    font-family: 'Poppins',sans-serif;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.75px;
    line-height: 28px;
    background: inherit;
  }

  .info__password {
    margin-top: 40px
  }

  .info__input {
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

  .new-password__row-name {
    margin: 0;
  }

  @media (max-width: 1279px) {
    max-width: 529px;
    width: 100%;
  }

  @media (max-width: 833px) {
    align-items: center;

    .icon {
      padding: 12px 16px 11px 24px;
    }

    .info__row-name {
      font-size: 12px;
      line-height: 24px;
    }

    .info__row-value {
      font-size: 14px;
    }

    .info__row {
      padding: 2px 0;
    }

    .no-hint {
      padding: 14px 0;
    }
  }
`;

export default CommonInputWrapper;
