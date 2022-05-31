import React, { useMemo, useState } from 'react';
import CommonWrapper from '../../styles/CommonWrapper';
import UserProfileWrapper from './UserProfile.styles';
import defaultAvatar from '../../images/defaultAvatar.png';
import changeAvatarButton from '../../images/changeAvatarButton.png';
import UserPassword from './UserPassword';
import UserInfo from './UserInfo';
import userApi from '../../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../../store';
import config from '../../../config';
import { setUser } from '../../../store/reducer';

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const [isChangeUserInfo, setIsChangeUserInfo] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const user = useAppSelector((state) => state.userReducer.user);

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
          console.log('ERROR >>', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const avatar = useMemo(() => {
    if (!user?.avatar) {
      return defaultAvatar;
    }
    return `${config.apiBaseUrl}/${user.avatar}`;
  }, [user?.avatar]);

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
