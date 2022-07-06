import { Link } from 'react-router-dom';
import profileIcon from '../../../images/user_profile.png';
import cartIcon from '../../../images/card.svg';
import favoritesIcon from '../../../images/favorites.png';
import { routePath } from '../../../../constants';
import AuthButtonsWrapper from './AuthButtonsWrapper.styles';

const AuthButtonsBlock = () => {
  return (
    <AuthButtonsWrapper>
      <Link to={routePath.cart}>
        <img
          src={cartIcon}
          className="header__icon"
        />
      </Link>

      <Link to={routePath.favorites} >
        <img
          src={favoritesIcon}
          className="header__icon"
        />
      </Link>

      <Link to={routePath.profile}>
        <img
          src={profileIcon}
          className="header__icon"
        />
      </Link>
    </AuthButtonsWrapper>
  );
};

export default AuthButtonsBlock;
