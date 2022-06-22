import styled from 'styled-components';

const GenreCheckboxWrapper = styled.div`
  width: 305px;
  height: 500px;
  position: absolute;
  top: 74px;
  display: flex;
  flex-direction: column;
  background: #F0F4EF;
  border-radius: 16px;
  margin-left: -15px;
  z-index: 1;

  .genres-checkbox__wrapper {
    overflow: auto;
  }

  .genres-checkbox__option {
    color: #344966;
    line-height: 28px;
    letter-spacing: 0.75px;
    margin: 10px 0;
    cursor: pointer;
  }

  .genres-checkbox__icon {
    width: 24px;
    height: 24px;
    vertical-align: text-bottom;
    margin: 0 10px 0 15px;
  }

  .genres-checkbox__arrow-up {
    width: 33px;
    height: 20px;
    position: absolute;
    top: -14px;
    left: 11px;
  }

  @media (max-width: 1310px) {
    width: 290px;
  }

  @media (max-width: 833px) {
    width: 100%;
    z-index: 1;
  }
`;

export default GenreCheckboxWrapper;
