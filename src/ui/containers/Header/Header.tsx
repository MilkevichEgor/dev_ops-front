import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../store';
import logo from '../../images/logo.svg';
import searchIcon from '../../images/SearchIcon.png';
import Logo from '../../styles/Logo';
import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../styles/CommonWrapper';
import HeaderWrapper from '../Header/Header.styles';
import { routePath } from '../../../constants';
import AuthButtonsBlock from './AuthButtonsBlock';

const Header = () => {
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <CommonWrapper>
      <HeaderWrapper>
        <div className="link-block">
          <Link to={routePath.home}>
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
        {(user)
          ? <AuthButtonsBlock />
          : <Link className="link" to={routePath.signIn}>
              <CommonButton
                text="Log In / Sign Up"
              />
            </Link>
        }
        {/* <Link className="link" to={routePath.signIn}>
          <CommonButton
            text="Log In / Sign Up"
          />
        </Link> */}
      </HeaderWrapper>
    </CommonWrapper>
  );
};

export default Header;
