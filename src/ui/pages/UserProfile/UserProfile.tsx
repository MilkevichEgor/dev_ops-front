import React, { useState } from 'react';
import CommonWrapper from '../../styles/CommonWrapper';
import UserProfileWrapper from './UserProfile.styles';
import defaultAvatar from '../../images/defaultAvatar.png';
import changeAvatarButton from '../../images/changeAvatarButton.png';
import UserPassword from './UserPassword';
import UserInfo from './UserInfo';
import userApi from '../../../api/userApi';

const UserProfile = () => {
  const [isChangeUserInfo, setIsChangeUserInfo] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  const toggleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const toggleChangeUserInfo = () => {
    setIsChangeUserInfo(!isChangeUserInfo);
  };

  const handleAvatar = async (event: any) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result;
        const encoded = JSON.stringify(base64String);
        console.log('>>>>>>>>>>>', encoded);
        const response = await userApi.uploadAvatar({ img: encoded });
        if (response.status === 200) {
          console.log('Fuck yeah!');
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.log('ERROR >>', error);
    }
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
        <form>
          <input type="file" name="ava" id="ava"
            onChange={(e) => handleAvatar(e)}
          />
        </form>
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
