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
    border: none;
  background: #F0F4EF;
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
  }

  .link {
    text-decoration-line: none;
  }
`;

export default HeaderWrapper;
