import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../Images/logo.svg';
import searchIcon from '../../Images/SearchIcon.png';
import Logo from '../../../styles/Logo';
import CommonButton from '../../../styles/CommonButton';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;
`;

const SearchField = styled.div`
  display: flex;
  background-color: #F0F4EF;
  border-radius: 16px;
  align-items: center;
  max-width: 630px;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  background: #F0F4EF;
`;

const SearchIcon = styled.img`
  padding: 20px 16px 20px 24px;
`;

const HeaderLinkBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CatalogLink = styled.span`
  padding-left: 128px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLinkBlock>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <CatalogLink>
          Catalog
        </CatalogLink>
      </HeaderLinkBlock>
      <SearchField>
        <SearchIcon src={searchIcon} />
        <SearchInput
          type="text"
          id="global-search"
          placeholder="Search"
        />
      </SearchField>
      <Link to="/signIn">
        <CommonButton>
          Log In/ Sign Up
        </CommonButton>
      </Link>
      {/* <Link to="/signUp">Sign Up</Link> */}
    </HeaderWrapper>
  );
};

export default Header;
