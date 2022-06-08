import React from 'react';
import { useFormik } from 'formik';
import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import YupRef from 'yup/lib/Reference';
import hideIcon from '../../images/hide.png';
import CommonInputField from '../../components/CommonInputField';
import CommonButton from '../../components/CommonButton';
import { useAppSelector } from '../../../store';
import { User } from '../../../types';
import userApi from '../../../api/userApi';

type UserProfileProps = {
  isChangePassword: boolean;
  toggleChangePassword: () => void;
}

const changePasswordValidationSchema = new YupObject().shape({
  oldPassword: new YupString().required('Required'),
  password: new YupString().required('Required'),
  passwordRepeat: new YupString().when('password', {
    is: (value: string) => (!!(value && value.length > 0)), // eslinter :(
    then: new YupString().oneOf(
      [new YupRef('password')],
      'Both password need to be the same',
    ),
  }),
});

const UserPassword: React.FC<UserProfileProps> = (props) => {
  const user = useAppSelector((state) => state.userReducer.user) as User;
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
        const response = await userApi.updateUser(user.id, { oldPassword, password });
        if (response.status === 200) {
          props.toggleChangePassword();
        }
      } catch (error) {
        console.log('ERROR>>', error);
      }
    },
  });

  if (props.isChangePassword) {
    return (
      <CommonInputField
        icon={hideIcon}
        name="password"
        hint="Your password"
        placeholder="*************"
        disabled={true}
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
        icon={hideIcon}
        name="oldPassword"
        hint="Old password"
        placeholder="*************"
        type="password"
        fieldInputProps={formik.getFieldProps('oldPassword')}
        error={formik?.touched.oldPassword ? formik?.errors.oldPassword : ''}
      />
      <CommonInputField
        icon={hideIcon}
        name="password"
        type="password"
        placeholder="New password"
        fieldInputProps={formik.getFieldProps('password')}
        error={formik?.touched.password ? formik?.errors.password : ''}
      />
      <p>Enter your password</p>
      <CommonInputField
        icon={hideIcon}
        placeholder="Password replay"
        type="password"
        name="passwordRepeat"
        fieldInputProps={formik.getFieldProps('passwordRepeat')}
        error={formik?.touched.passwordRepeat ? formik?.errors.passwordRepeat : ''}
      />
      <p>Repeat your passport withour errors</p>
      <CommonButton
        text="Confirm"
      />
    </form>
  );
};

export default UserPassword;
