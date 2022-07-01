import styled from 'styled-components';

const AuthButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  .header__icon {
    padding-left: 27px;
    cursor: pointer;
  }

  @media (max-width: 833px) {
    .header__icon {
      width: 33px;
      padding-left: 18px;
    }
  }
`;

export default AuthButtonsWrapper;
