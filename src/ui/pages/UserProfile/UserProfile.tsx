import React, { useState } from 'react';
import CommonWrapper from '../../styles/CommonWrapper';
import UserProfileWrapper from './UserProfile.styles';
import defaultAvatar from '../../images/defaultAvatar.png';
import changeAvatarButton from '../../images/changeAvatarButton.png';
import mailIcon from '../../images/mail.png';
import UserPassword from './UserPassword';

const UserProfile = () => {
  const [changePassword, setChangePassword] = useState(false);
  return (
    <CommonWrapper>
      <UserProfileWrapper>
        <div className="avatar-block">
          <img className="avatar-img" src={defaultAvatar} />
          <img
            src={changeAvatarButton}
            className="avatar-button"
            alt="change avatar button" />
        </div>

        <div className="info">
          <div className="title">
            <p className="title__name">Personal information</p>
            <p className="title__change">Change information</p>
          </div>
          <div>
            <div className="info__field">
              <img className="icon" src={defaultAvatar} />
              <div className="info__row">
                <p className="info__row-name">Your name</p>
                <p className="info__row-value">Donald Duck</p>
              </div>
            </div>
            <div className="info__field info__general">
              <img className="icon" src={mailIcon} />
              <div className="info__row">
                <p className="info__row-name">Your email</p>
                <p className="info__row-value">DuckThemAll@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="title info__password">
            <p className="title__name">Password</p>
            <p
              className="title__change"
              onClick={() => setChangePassword(!changePassword)}
            >Change password</p>
          </div>
          <UserPassword
            isChange={changePassword}
          />
        </div>
      </UserProfileWrapper>
    </CommonWrapper >
  );
};

export default UserProfile;
