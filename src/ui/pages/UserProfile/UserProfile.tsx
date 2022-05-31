import React, { useEffect, useState } from 'react';
import CommonWrapper from '../../styles/CommonWrapper';
import UserProfileWrapper from './UserProfile.styles';
import defaultAvatar from '../../images/defaultAvatar.png';
import changeAvatarButton from '../../images/changeAvatarButton.png';
import UserPassword from './UserPassword';
import UserInfo from './UserInfo';
import userApi from '../../../api/userApi';
import { useAppSelector } from '../../../store';
import { User } from '../../../types';

const UserProfile = () => {
  const [isChangeUserInfo, setIsChangeUserInfo] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [avatar, setAvatar] = useState(defaultAvatar);
  const user = useAppSelector((state) => state.userReducer.user) as User;
  if (user.avatar) {
    useEffect(() => {
      (async () => {
        try {
          const ava = `http://localhost:4000/${user.avatar}`;
          await setAvatar(ava);
        } catch (error) {
          console.log(error);
        }
      })();
    });
  }
  const toggleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const toggleChangeUserInfo = () => {
    setIsChangeUserInfo(!isChangeUserInfo);
  };

  const handleAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64String = reader.result;
          const encoded = JSON.stringify(base64String);
          const response = await userApi.uploadAvatar({ img: encoded });
          if (response.status === 200) {
            console.log('Fuck yeah!');
          }
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.log('ERROR >>', error);
    }
  };

  return (
    <CommonWrapper>
      <UserProfileWrapper>
        <div className="avatar-block">
          <img className="avatar-img" src={avatar} />
          <label
            htmlFor="ava"
          >
            <img
              src={changeAvatarButton}
              className="avatar-button"
              alt="change avatar button" />
            <input hidden type="file" name="ava" id="ava"
              onChange={(e) => handleAvatar(e)}
            />
          </label>
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
