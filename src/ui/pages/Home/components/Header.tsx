import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../Images/logo.svg';

const HeaderWrapper = styled.header`
display: flex;

`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} />
      <form>
        <input
          type="text"
          id="global-search"
          placeholder="Search"
        />
      </form>
      <nav>
        <Link to="/signIn">Log In</Link>
        <Link to="/signUp">Sign Up</Link>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
