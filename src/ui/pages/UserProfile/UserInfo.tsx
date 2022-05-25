import React from 'react';
import CommonInputField from '../../components/CommonInputField';
import defaultAvatar from '../../images/defaultAvatar.png';
import mailIcon from '../../images/mail.png';

type UserInfoProps = {
  isChange: boolean;
}

const UserInfo: React.FC<UserInfoProps> = (props) => {
  return (
    <div>
      <CommonInputField
        icon={defaultAvatar}
        hint="Your name"
        value="Donald Duck"
        disabled={props.isChange}
      />
      <CommonInputField
        icon={mailIcon}
        hint="Your email"
        value="DuckThemAll@gmail.com"
        disabled={props.isChange}
      />
    </div>
  );
};

export default UserInfo;
