import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoWhiteLetters.png';
import map from '../../images/map.png';
import Logo from '../../styles/Logo.styles';
import FooterWrapper from './Footer.styles';
import CommonWrapper from '../../styles/CommonWrapper.styles';
import { routePath } from '../../../constants';

const Footer = () => {
  return (
    <FooterWrapper>
      <CommonWrapper>
        <div className="main-block ">
          <div className="contacts">
            <Link to={routePath.home}>
              <Logo
                src={logo}
                className="logo"
              />
            </Link>
            <p className="text">
              ye.alexey@gmail.com
            </p>
            <p className="text">
              (480) 555-0103
            </p>
          </div>
          <div className="nav">
            <Link to={routePath.home} className="link">
              Home Page
            </Link>
            <Link to={routePath.home} className="link">
              Catalog
            </Link>
            <Link to={routePath.profile} className="link">
              My Account
            </Link>
            <Link to={routePath.cart} className="link">
              Cart
            </Link>
          </div>
          <div>
            <p className="text">
              6391 Elgin St. Celina, Delaware 10299
            </p>
            <img
              className="map"
              src={map}
            />
          </div>
        </div>
      </CommonWrapper>
    </FooterWrapper>
  );
};

export default Footer;
