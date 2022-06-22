import styled from 'styled-components';

const CatalogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 110px;

  .filter__wrapper {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background-color: #F0F4EF;
    border-radius: 16px;
    width: 196px;
    padding-left: 15px;
    margin-left: 20px;
  }

  .filter__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0;
  }

  .filter__form {
    display: flex;
    align-items: center;
  }

  .filter__name {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #344966;
    margin: 0;
  }

  .filter__icon {
    width: 9px;
    height: 16px;
    padding: 17px;
  }

  @media (max-width: 1279px) {
    flex-direction: column;
    
    .filter__wrapper {
      width: 255px;
    }
  }

  @media (max-width: 833px) {
    .filter__title {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 13px;
    }

    .filter__form {
      flex-direction: column;
    }

    .filter__wrapper {
      width: 290px;
      margin-left: 0;
      margin-bottom: 20px;
    }

    .filter__name {
      font-size: 14px;
      line-height: 28px;
    }
  }
`;

export default CatalogWrapper;
