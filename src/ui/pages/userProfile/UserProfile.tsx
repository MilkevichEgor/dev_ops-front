import React, { useState } from 'react';
import { toast } from 'react-toastify';

import userApi from '../../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setUser } from '../../../store/userReducer';
import { User } from '../../../types';

import UserPassword from './components/UserPassword';
import UserInfo from './components/UserInfo';
import CommonWrapper from '../../components/CommonWrapper.styles';

import UserProfileWrapper from './UserProfile.styles';

import defaultAvatar from '../../images/default-avatar.png';
import changeAvatarButton from '../../images/change-avatar-button.png';

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const [isChangeUserInfo, setIsChangeUserInfo] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const user = useAppSelector((state) => state.userReducer.user) as User;

  const toggleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const toggleChangeUserInfo = () => {
    setIsChangeUserInfo(!isChangeUserInfo);
  };

  const handleAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const base64String = reader.result;
          const encoded = JSON.stringify(base64String);
          const response = await userApi.uploadAvatar({ img: encoded });
          dispatch(setUser(response.data.user));
        } catch (error) {
          toast.error('Sorry, we were unable to upload the avatar now...', { autoClose: 3000 });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <CommonWrapper>
      <UserProfileWrapper>
        <div className="avatar">
          <img
            className="avatar__img"
            src={user.avatar || defaultAvatar}
          />
          <label htmlFor="ava">
            <img
              src={changeAvatarButton}
              className="avatar__button"
            />
            <input
              hidden
              type="file"
              name="ava"
              id="ava"
              onChange={handleAvatar}
            />
          </label>
        </div>
        <div className="user-info">
          <div className="title">
            <p className="title__name">
              Personal information
            </p>
            <p
              onClick={() => setIsChangeUserInfo(!isChangeUserInfo)}
              className="title__change"
            >
              Change information
            </p>
          </div>
          <UserInfo
            isChangeUserInfo={isChangeUserInfo}
            toggleChangeUserInfo={toggleChangeUserInfo}
          />
          <div className="title title__description">
            <p className="title__name">
              Password
            </p>
            <p
              className="title__change"
              onClick={() => toggleChangePassword()}
            >
              Change password
            </p>
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
