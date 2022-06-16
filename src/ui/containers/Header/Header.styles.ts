import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;

  .search-field {
    display: flex;
    background-color: #F0F4EF;
    border-radius: 16px;
    align-items: center;
    max-width: 630px;
    width: 100%;
  }

  .search-input {
    width: inherit;
    border: none;
    background: #F0F4EF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    outline: none;
  }

  .search-icon {
    padding: 20px 16px 20px 24px;
  }

  .link-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .catalog-link {
    padding-left: 128px;
    color: black;
  }

  .link {
    text-decoration-line: none;
  }

  .link:visited {
    color: black;
  }

  @media (max-width: 1279px) {
    .catalog-link {
      padding-left: 50px;
    }

    .search-field {
      max-width: 247px;
    }

  }

  @media (max-width: 833px) {
    flex-wrap: wrap;

    .catalog-link {
      padding-left: 17px;
      font-size: 14px;
      line-height: 21px;
    }

    .search-field {
      max-width: 290px;
      width: 100%;
      order: 1;
      margin-top: 17px;
    }

    .search-icon {
      width: 18px;
      height: 18px;
      padding: 14px 18px 15px 26px;
    }

    .link-block {
      order: -2;
    }

    .icon {
      display: flex;
    }
  }
`;

export default HeaderWrapper;
