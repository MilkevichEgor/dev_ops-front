import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;

  .search {
    display: flex;
    background-color: #F0F4EF;
    border-radius: 16px;
    align-items: center;
    max-width: 630px;
    width: 100%;
    cursor: text;
  }

  .search__input {
    width: inherit;
    border: none;
    background: #F0F4EF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    outline: none;
    -webkit-box-shadow: inset 0 0 0 50px #f0f4ef;
  }

  .search__icon {
    padding: 20px 16px 20px 24px;
  }

  .header__link-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__catalog-link {
    padding-left: 128px;
    color: black;
    cursor: pointer;
  }

  .header__link {
    text-decoration-line: none;
  }

  .header__link:visited {
    color: black;
  }

  @media (max-width: 1279px) {
    .header__catalog-link {
      padding-left: 50px;
    }

    .search {
      max-width: 247px;
    }
  }

  @media (max-width: 833px) {
    flex-wrap: wrap;

    .header__catalog-link {
      padding-left: 17px;
      font-size: 14px;
      line-height: 21px;
    }

    .search {
      max-width: 290px;
      width: 100%;
      order: 1;
      margin-top: 17px;
    }

    .search__icon {
      width: 18px;
      height: 18px;
      padding: 14px 18px 15px 26px;
    }

    .header__link-block {
      order: -2;
    }
  }
`;

export default HeaderWrapper;
