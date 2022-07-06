import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import YupRef from 'yup/lib/Reference';

import userApi from '../../../../api/userApi';
import { useAppSelector } from '../../../../store';
import { User } from '../../../../types';

import CommonInputField from '../../../components/CommonInputField';
import CommonButton from '../../../components/CommonButton';

import hideIcon from '../../../images/hide.png';
import showIcon from '../../../images/view.png';

type UserProfileProps = {
  isChangePassword: boolean;
  toggleChangePassword: () => void;
}

const changePasswordValidationSchema = new YupObject().shape({
  oldPassword: new YupString().required('Required'),
  password: new YupString().required('Required'),
  passwordRepeat: new YupString().when('password', {
    is: (value: string) => (Boolean(value && value.length > 0)),
    then: new YupString().oneOf(
      [new YupRef('password')],
      'Both passwords need to be the same',
    ),
  }),
});

const UserPassword: React.FC<UserProfileProps> = (props) => {
  const user = useAppSelector((state) => state.userReducer.user) as User;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      passwordRepeat: '',
    },
    validationSchema: changePasswordValidationSchema,
    onSubmit: async (values) => {
      try {
        const { password, oldPassword } = values;
        await userApi.updateUser(user.id, { oldPassword, password });
        props.toggleChangePassword();
        formik.setStatus('Success!');
        setTimeout(() => {
          formik.setStatus(false);
        }, 2000);
      } catch (error) {
        if (error instanceof AxiosError) {
          const status = error.response?.status;
          if (status === 403) {
            formik.setErrors({
              oldPassword: error.response?.data.data.message,
            });
          }
        } else {
          toast.error('Sorry, something went wrong...', { autoClose: 3000 });
        }
      }
    },
  });

  const icon = isPasswordVisible ? showIcon : hideIcon;
  const inputType = isPasswordVisible ? 'text' : 'password';

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (props.isChangePassword) {
    return (
      <CommonInputField
        icon={hideIcon}
        name="password"
        hint="Your password"
        placeholder="********"
        disabled={true}
        success={formik.status}
      />
    );
  }
  return (
    <form
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          formik.handleSubmit();
        }
      }}
      onSubmit={formik.handleSubmit}
    >
      <CommonInputField
        icon={icon}
        name="oldPassword"
        hint="Old password"
        placeholder="*************"
        type={inputType}
        fieldInputProps={formik.getFieldProps('oldPassword')}
        error={formik?.touched.oldPassword ? formik?.errors.oldPassword : ''}
        onClickOnIcon={togglePasswordVisibility}
      />
      <CommonInputField
        icon={icon}
        name="password"
        type="password"
        placeholder="New password"
        fieldInputProps={formik.getFieldProps('password')}
        error={formik?.touched.password ? formik?.errors.password : ''}
        onClickOnIcon={togglePasswordVisibility}
      />
      <p>Enter your password</p>
      <CommonInputField
        icon={icon}
        placeholder="Password replay"
        type="password"
        name="passwordRepeat"
        fieldInputProps={formik.getFieldProps('passwordRepeat')}
        error={formik?.touched.passwordRepeat ? formik?.errors.passwordRepeat : ''}
        onClickOnIcon={togglePasswordVisibility}
      />
      <p>Repeat your passport withour errors</p>
      <CommonButton
        text="Confirm"
      />
    </form>
  );
};

export default UserPassword;
