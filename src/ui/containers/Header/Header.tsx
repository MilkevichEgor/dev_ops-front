import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import logo from '../../images/logo.svg';
import searchIcon from '../../images/SearchIcon.png';
import Logo from '../../styles/Logo.styles';
import CommonWrapper from '../../styles/CommonWrapper.styles';
import HeaderWrapper from '../Header/Header.styles';
import { routePath } from '../../../constants';
import AuthButtonsBlock from './AuthButtonsBlock';
import useQuery from '../../../utils/useQuery';
import { QuerySearchOptions } from '../../../types';
import AuthDependentRenderController from '../../components/AuthDependentRenderController';
import CommonButton from '../../components/CommonButton';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setParams] = useQuery<QuerySearchOptions>();

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
        <div className="link-block">
          <Link to={routePath.home}>
            <Logo src={logo} />
          </Link>
          <Link className="link" to={routePath.home}>
            <span className="catalog-link">
              Catalog
            </span>
          </Link>
        </div>
        <label htmlFor="global-search"
          className="search"
        >
          <img className="search__icon" src={searchIcon} />
          <input
            className="search__input"
            type="text"
            id="global-search"
            placeholder="Search"
            onKeyDown={handleSearchRequest}
          />
        </label>

        <AuthDependentRenderController>
          <AuthButtonsBlock />
        </AuthDependentRenderController>

        <AuthDependentRenderController
          noAuthOnly
        >
          <Link className="link" to={routePath.signIn}>
            <CommonButton
              text="Log In / Sign Up"
            />
          </Link>
        </AuthDependentRenderController>

      </HeaderWrapper>
    </CommonWrapper>
  );
};

export default Header;
