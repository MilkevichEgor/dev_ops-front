import React from 'react';
import { useFormik } from 'formik';
import CommonInputField from '../../components/CommonInputField';
import defaultAvatar from '../../images/defaultAvatar.png';
import mailIcon from '../../images/mail.png';
import { useAppSelector } from '../../../store';

type UserInfoProps = {
  isChange: boolean;
  disabled?: boolean;
}

const UserInfo: React.FC<UserInfoProps> = (props) => {
  const user = useAppSelector((state) => state.userReducer.user);

  const formik = useFormik({
    initialValues: {
      name: user?.name || 'Anonymous',
      email: user?.email,
    },
    onSubmit: (values) => {
      console.log('AAAAAAAAAAAAAAAaaa', values);
    },
  });
  return (
    <form
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          formik.handleSubmit();
        }
      }}
      >
      <CommonInputField
        icon={defaultAvatar}
        hint="Your name"
        value={user?.name}
        name="name"
        disabled={props.isChange}
        fieldInputProps={formik.getFieldProps('name')}
        error={formik?.touched.email ? formik?.errors.name : ''}
      />
      <CommonInputField
        icon={mailIcon}
        hint="Your email"
        value={user?.email}
        name="email"
        disabled={props.isChange}
        fieldInputProps={formik.getFieldProps('email')}
        error={formik?.touched.email ? formik?.errors.email : ''}
      />
    </form>
  );
};

export default UserInfo;
