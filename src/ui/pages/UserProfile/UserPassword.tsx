import React from 'react';
import hideIcon from '../../images/hide.png';
import CommonInputField from '../../components/CommonInputField';
import CommonButton from '../../components/CommonButton';

type UserProfileProps = {
  isChange?: boolean;
}

const UserPassword: React.FC<UserProfileProps> = (props) => {
  if (props.isChange) {
    return (
      <CommonInputField
        icon={hideIcon}
        hint="Your password"
        placeholder="*************"
        disabled={true}
      />
    );
  }
  return (
    <div>
      <CommonInputField
        icon={hideIcon}
        hint="Old password"
        placeholder="*************"
        type="password"
      />
      <CommonInputField
        icon={hideIcon}
        placeholder='New password'
      />
      <p className="new-password__row-name">Enter your password</p>
      <CommonInputField
        icon={hideIcon}
        placeholder='Password replay'
        type='password'
      />
      <p className="new-password__row-name">Repeat your passport withour errors</p>
      <CommonButton
        text="Confirm"
      />
    </div>
  );
};

export default UserPassword;
