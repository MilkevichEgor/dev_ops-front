import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/user_profile.png';
import cardIcon from '../../images/card.svg';
import favoritesIcon from '../../images/favorites.png';
import { routePath } from '../../../constants';
import AuthButtonsWrapper from './AuthButtonsWrapper.styles';

const AuthButtonsBlock = () => {
  return (
    <AuthButtonsWrapper>
      <Link to={routePath.card}>
        <img src={cardIcon} className="icon" />
      </Link>
      <Link to={routePath.profile}>
        <img src={favoritesIcon} className="icon" />
      </Link>
      <Link to={routePath.profile}>
        <img src={profileIcon} className="icon" />
      </Link>
    </AuthButtonsWrapper>
  );
};

export default AuthButtonsBlock;
