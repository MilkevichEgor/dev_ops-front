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

  .genres-block {
    overflow: auto;
  }

  .option {
    color: #344966;
    line-height: 28px;
    letter-spacing: 0.75px;
    margin: 10px 0;
    cursor: pointer;
  }

  .checkbox {
    width: 1.85em;
    height: 1.85em;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 10px;
    vertical-align: bottom;
  }

  .arrow-up {
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
