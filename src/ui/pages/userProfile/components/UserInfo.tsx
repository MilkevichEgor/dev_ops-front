import React from 'react';
import { useFormik } from 'formik';

import CommonInputField from '../../../components/CommonInputField';

import userApi from '../../../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setUser } from '../../../../store/userReducer';
import { User } from '../../../../types';

import CommonButton from '../../../components/CommonButton';

import defaultAvatar from '../../../images/default-avatar.png';
import mailIcon from '../../../images/mail.png';

type UserInfoProps = {
  isChangeUserInfo: boolean;
  disabled?: boolean;
  toggleChangeUserInfo: () => void;
}

const UserInfo: React.FC<UserInfoProps> = (props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.user) as User;

  const formik = useFormik({
    initialValues: {
      name: user.name || '',
      email: user.email,
    },
    onSubmit: async (values) => {
      try {
        const response = await userApi.updateUser(user.id, values);
        dispatch(setUser(response.data.user));
        props.toggleChangeUserInfo();
        formik.setStatus('Success!');
        setTimeout(() => {
          formik.setStatus(false);
        }, 2000);
      } catch (error) {
        console.log('ERROR >>', error);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
    >
      <CommonInputField
        icon={defaultAvatar}
        hint="Your name"
        value={user?.name}
        name="name"
        disabled={!props.isChangeUserInfo}
        fieldInputProps={formik.getFieldProps('name')}
        error={formik?.touched.email ? formik?.errors.name : ''}
        success={formik.status}
      />
      <CommonInputField
        icon={mailIcon}
        hint="Your email"
        value={user?.email}
        name="email"
        disabled={!props.isChangeUserInfo}
        fieldInputProps={formik.getFieldProps('email')}
        error={formik?.touched.email ? formik?.errors.email : ''}
        success={formik.status}
      />
      {props.isChangeUserInfo &&
        <CommonButton
          text="Confirm"
        />
      }
    </form>
  );
};

export default UserInfo;
