import React from 'react';
import { Link } from 'react-router-dom';
import CommonButton from '../../../styles/CommonButton';
import CommonTextBlock from '../../../styles/CommonTextBlock';
import castle from '../../Images/castle.png';
import fairy from '../../Images/fairy.png';
import Wrapper from '../components/AuthorizeBanner.styles';

const AuthorizeBanner = () => {
  return (
    <Wrapper>
      <div>
        <img src={castle} className="main-img" alt="castle image" />
      </div>
      <div className="info-block">
        <img src={fairy} className="background-img" alt="fairy image" />
        <CommonTextBlock className="text-block">
          <p className="title">Authorize now</p>
          <p className="text">
            Authorize now and discover the fabulous world of books
          </p>
          <Link to="/signIn">
            <CommonButton className="button">Log In/ Sign Up</CommonButton>
          </Link>
        </CommonTextBlock>
      </div>
    </Wrapper>
  );
};

export default AuthorizeBanner;
