import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../images/logo.svg';
import searchIcon from '../../images/SearchIcon.png';
import Logo from '../../components/Logo';
import CommonWrapper from '../../styles/CommonWrapper.styles';
import HeaderWrapper from './Header.styles';
import { routePath } from '../../../constants';
import AuthButtonsBlock from './components/AuthButtonsBlock';
import useQuery from '../../../utils/useQuery';
import { QuerySearchOptions } from '../../../types';
import AuthProtector from '../../components/AuthProtector';
import CommonButton from '../../components/CommonButton/CommonButton';
import logOut from '../../../utils/logOut';
import { useAppSelector } from '../../../store';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setParams] = useQuery<QuerySearchOptions>();
  const user = useAppSelector((state) => state.userReducer.user);

  const handleSearchRequest: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      setParams({ value });
      if (location.pathname !== '/') {
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
            hidden={Boolean(!user)}
          >
            Log out
          </span>
        </div>
        <label htmlFor="global-search"
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
            <CommonButton
              text="Log In / Sign Up"
            />
          </Link>
        </AuthProtector>
      </HeaderWrapper>
    </CommonWrapper>
  );
};

export default Header;
