import React from 'react';
import { useFormik } from 'formik';
import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authAPI from '../../../api/authApi';
import Wrapper from './Auth.styles';
import man from '../../images/man.png';
import hide from '../../images/hide.png';
import mail from '../../images/mail.png';
import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../styles/CommonWrapper';
import { User } from '../../../types';
import { setUser } from '../../../store/reducer';
import { routePath } from '../../../constants';
import CommonInputField from '../../components/CommonInputField';

const signInValidationSchema = new YupObject().shape({
  email: new YupString().email('Invalid email address').required('Required'),
  password: new YupString().required('Required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values) => {
      const response = await authAPI.signIn({
        email: values.email,
        password: values.password,
      });
      setUserInStore(response.data.user);
    },
  });

  const setUserInStore = (user: User) => {
    dispatch(setUser(user));
  };

  return (
    <CommonWrapper>
      <Wrapper>
        <form
          className="form-wrapper"
          onSubmit={formik.handleSubmit}>
          <h1 className="title">Log In</h1>

          <div className="input-wrapper">
            <CommonInputField
              icon={mail}
              name="email"
              placeholder="Email"
              // formik={formik.getFieldProps}
              fieldInputProps={formik.getFieldProps('email')}
              error={formik?.touched.email ? formik?.errors.email : ''}
            />
            <p className="form__text">Enter your email</p>
            <CommonInputField
              icon={hide}
              type="password"
              name="password"
              placeholder="Password"
              fieldInputProps={formik.getFieldProps('password')}
              error={formik?.touched.password ? formik?.errors.password : ''}
            />
            <p className="form__text">Enter your password</p>
          </div>
          <CommonButton
            text="Log In"
          />
          <h4>Don`t you have an account yet?
            <Link to={routePath.signUp} className="button">
              <span>Let`s sign up!</span>
            </Link>
          </h4>
        </form>
        <img src={man} />
      </Wrapper>
    </CommonWrapper>
  );
};

export default SignInForm;
