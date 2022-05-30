import React, { useState } from 'react';
import CommonWrapper from '../../styles/CommonWrapper';
import UserProfileWrapper from './UserProfile.styles';
import defaultAvatar from '../../images/defaultAvatar.png';
import changeAvatarButton from '../../images/changeAvatarButton.png';
import UserPassword from './UserPassword';
import UserInfo from './UserInfo';

const UserProfile = () => {
  const [isChangeUserInfo, setIsChangeUserInfo] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  const toggleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const toggleChangeUserInfo = () => {
    setIsChangeUserInfo(!isChangeUserInfo);
  };

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
            <p
              onClick={() => setIsChangeUserInfo(!isChangeUserInfo)}
              className="title__change">
              Change information</p>
          </div>
          <UserInfo
            isChangeUserInfo={isChangeUserInfo}
            toggleChangeUserInfo={toggleChangeUserInfo}
          />
          <div className="title info__password">
            <p className="title__name">Password</p>
            <p
              className="title__change"
              onClick={() => toggleChangePassword()}
            >Change password</p>
          </div>
          <UserPassword
            isChangePassword={!isChangePassword}
            toggleChangePassword={toggleChangePassword}
          />
        </div>
      </UserProfileWrapper>
    </CommonWrapper >
  );
};

export default UserProfile;
