import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import searchIcon from '../../images/SearchIcon.png';
import Logo from '../../styles/Logo';
import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../styles/CommonWrapper';
import HeaderWrapper from '../Header/Header.styles';

const Header = () => {
  return (
    <CommonWrapper>
      <HeaderWrapper>
        <div className="link-block">
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <span className="catalog-link">
            Catalog
          </span>
        </div>
        <div className="search-field">
          <img className="search-icon" src={searchIcon} />
          <input
            className="search-input"
            type="text"
            id="global-search"
            placeholder="Search"
          />
        </div>
        <Link className="link" to="/signin">
          <CommonButton
            text="Log In / Sign Up"
          />
        </Link>
      </HeaderWrapper>
    </CommonWrapper>
  );
};

export default Header;
