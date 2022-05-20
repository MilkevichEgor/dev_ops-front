import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.svg';
import map from '../../Images/map.png';

const FooterWrapper = styled.footer`
display: flex;
background: #0D1821;
`;

const Nav = styled.nav`
color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <img src={logo} alt="store logo" />
      <Nav>
        <Link to="/">Home Page</Link>
        <a href="">Catalog</a>
        <a href="">My Account</a>
        <a href="">Cart</a>
      </Nav>
      <img src={map} alt="map" />
    </FooterWrapper>
  );
};

export default Footer;
