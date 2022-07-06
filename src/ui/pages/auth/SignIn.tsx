import React from 'react';
import { useFormik } from 'formik';
import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import authAPI from '../../../api/authApi';
import { useAppDispatch } from '../../../store';
import { setUser } from '../../../store/userReducer';
import { routePath } from '../../../constants';

import CommonInputField from '../../components/CommonInputField';
import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../components/CommonWrapper.styles';
import Wrapper from './Auth.styles';

import man from '../../images/man.png';
import hide from '../../images/hide.png';
import mail from '../../images/mail.png';

const signInValidationSchema = new YupObject().shape({
  email: new YupString().email('Invalid email address').required('Required'),
  password: new YupString().required('Required'),
});

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await authAPI.signIn({
          email: values.email,
          password: values.password,
        });
        dispatch(setUser(response.data.user));

        return navigate(`${routePath.home}`);
      } catch (error) {
        if (error instanceof AxiosError) {
          const status = error.response?.status;
          if (status === 403) {
            formik.setErrors({
              password: error.response?.data.data.message,
            });
          }
          if (status === 404) {
            formik.setErrors({
              email: error.response?.data.data.message,
            });
          }
        }
      }
    },
  });

  return (
    <CommonWrapper>
      <Wrapper>
        <form
          className="form-wrapper"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="title">
            Log In
          </h1>

          <div className="input-wrapper">
            <CommonInputField
              icon={mail}
              name="email"
              placeholder="Email"
              fieldInputProps={formik.getFieldProps('email')}
              error={formik?.touched.email ? formik?.errors.email : ''}
            />
            <p className="form__text">
              Enter your email
            </p>

            <CommonInputField
              icon={hide}
              type="password"
              name="password"
              placeholder="Password"
              fieldInputProps={formik.getFieldProps('password')}
              error={formik?.touched.password ? formik?.errors.password : ''}
            />
            <p className="form__text">
              Enter your password
            </p>
          </div>
          <CommonButton
            size="permanent"
            text="Log In"
          />
          <h4 className="question">
            Don`t you have an account yet? &nbsp;
            <Link to={routePath.signUp} className="button">
              <span>Let`s sign up!</span>
            </Link>
          </h4>
        </form>
        <img
          className="image"
          src={man}
        />
      </Wrapper>
    </CommonWrapper>
  );
};

export default SignInForm;
