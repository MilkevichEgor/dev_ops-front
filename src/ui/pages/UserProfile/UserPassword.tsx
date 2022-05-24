import React from 'react';
import hideIcon from '../../images/hide.png';
import Wrapper from './UserPassword.styles';

type UserProfileProps = {
  isChange?: boolean;
}

const UserPassword: React.FC<UserProfileProps> = (props) => {
  if (props.isChange) {
    return (
      <Wrapper>
        <img className="icon" src={hideIcon} />
        <div className="info__row">
          <p className="info__row-name">Your password</p>
          <p className="info__row-value">*************</p>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <Wrapper>
        <img className="icon" src={hideIcon} />
        <div className="info__row">
          <p className="info__row-name">Old password</p>
          <input
            className="info__row-value info__input"
            type="text"
            placeholder="*************" />
        </div>
      </Wrapper>
      <Wrapper>
        <img className="icon" src={hideIcon} />
        <div className="info__row new-password">
          <input
            className="info__row-value info__input"
            type="text"
            placeholder="New password" />
        </div>
      </Wrapper>
      <p className="new-password__row-name">Enter your password</p>
      <Wrapper>
        <img className="icon" src={hideIcon} />
        <div className="info__row new-password">
          <input
            className="info__row-value info__input"
            type="text"
            placeholder="Password replay" />
        </div>
      </Wrapper>
      <p className="new-password__row-name">Repeat your passport withour errors</p>
    </div>
  );
};

export default UserPassword;
