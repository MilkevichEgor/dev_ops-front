import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../store';
import logo from '../../images/logo.svg';
import searchIcon from '../../images/SearchIcon.png';
import Logo from '../../styles/Logo';
import CommonWrapper from '../../styles/CommonWrapper';
import HeaderWrapper from '../Header/Header.styles';
import { routePath } from '../../../constants';
import AuthButtonsBlock from './AuthButtonsBlock';
import CommonButtonWrapper from '../../components/CommonButton.styled';
import useQuery from '../../../utils/useQuery';
import { QuerySearchOptions } from '../../../api/bookApi';

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
      <HeaderWrapper>
        <div className="link-block">
          <Link to={routePath.home}>
            <Logo src={logo} />
          </Link>
          <span className="catalog-link">
            Catalog
          </span>
        </div>
        <label htmlFor="global-search"
          className="search-field"
        >
          <img className="search-icon" src={searchIcon} />
          <input
            className="search-input"
            type="text"
            id="global-search"
            placeholder="Search"
            onKeyDown={handleSearchRequest}
          />
        </label>
        {user
          ? <AuthButtonsBlock />
          : (
            <Link className="link" to={routePath.signIn}>
              <CommonButtonWrapper
                // text="Log In / Sign Up"
                className="test"
              >
                Log In / Sign Up
              </CommonButtonWrapper>
            </Link>
          )}
      </HeaderWrapper>
    </CommonWrapper>
  );
};

export default Header;
