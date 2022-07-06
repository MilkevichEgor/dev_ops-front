import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../store';
import { QuerySearchOptions } from '../../../types';
import { routePath } from '../../../constants';
import useQuery from '../../../utils/useQuery';
import logOut from '../../../utils/logOut';

import Logo from '../../components/Logo';
import AuthButtonsBlock from './components/AuthButtonsBlock';
import AuthProtector from '../../components/AuthProtector';
import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../components/CommonWrapper.styles';
import HeaderWrapper from './Header.styles';

import logo from '../../images/logo.svg';
import searchIcon from '../../images/search-icon.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setParams] = useQuery<QuerySearchOptions>();
  const user = useAppSelector((state) => state.userReducer.user);

  const handleSearchRequest: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      setParams({ value });
      if (location.pathname !== routePath.home) {
        navigate(`${routePath.home}?value=${value}`);
      }
    }
  };

  return (
    <CommonWrapper>
      <HeaderWrapper >
        <div className="header__link-block">
          <Link to={routePath.home}>
            <Logo src={logo} />
          </Link>
          <span
            className="header__catalog-link"
            onClick={logOut}
            hidden={!user}
          >
            Log out
          </span>
        </div>
        <label
          htmlFor="global-search"
          className="search"
        >
          <img
            className="search__icon"
            src={searchIcon}
          />
          <input
            className="search__input"
            type="text"
            id="global-search"
            placeholder="Search"
            onKeyDown={handleSearchRequest}
          />
        </label>

        <AuthProtector>
          <AuthButtonsBlock />
        </AuthProtector>

        <AuthProtector noAuthOnly>
          <Link
            className="header__link"
            to={routePath.signIn}
          >
            <CommonButton text="Log In / Sign Up" />
          </Link>
        </AuthProtector>
      </HeaderWrapper>
    </CommonWrapper>
  );
};

export default Header;
