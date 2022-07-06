import React from 'react';
import { Link } from 'react-router-dom';

import { routePath } from '../../../constants';
import castle from '../../images/castle.png';
import fairy from '../../images/fairy.png';
import CommonButton from '../CommonButton';
import CommonTextBlock from '../../styles/CommonTextBlock.styles';
import Wrapper from './AuthorizeBanner.styles';
import CommonWrapper from '../../styles/CommonWrapper.styles';

const AuthorizeBanner = () => {
  return (
    <CommonWrapper>
      <Wrapper>
        <div>
          <img
            src={castle}
            className="main-img"
          />
        </div>
        <div className="info-block">
          <img
            src={fairy}
            className="background-img"
          />
          <CommonTextBlock className="text-block">
            <p className="title">
              Authorize now
            </p>
            <p className="text">
              Authorize now and discover the fabulous world of books
            </p>
            <Link
              className="button"
              to={routePath.signIn}
            >
              <CommonButton
                size="permanent"
                text="Log In/ Sign Up"
              />
            </Link>
          </CommonTextBlock>
        </div>
      </Wrapper>
    </CommonWrapper>
  );
};

export default AuthorizeBanner;
