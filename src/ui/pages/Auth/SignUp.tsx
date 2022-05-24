import React from 'react';
import { FormikValues, useFormik } from 'formik';
import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import YupRef from 'yup/lib/Reference';
import authAPI from '../../../api/authApi';
import man from '../../images/man.png';
import hide from '../../images/hide.png';
import mail from '../../images/mail.png';
import Wrapper from './Auth.styles';
import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../styles/CommonWrapper';

const signUpValidationSchema = new YupObject().shape({
  email: new YupString().email('Invalid email address').required('Required'),
  password: new YupString().required('Required'),
  passwordRepeat: new YupString().when('password', {
    is: (value: string) => (!!(value && value.length > 0)), // eslinter :(
    then: new YupString().oneOf(
      [new YupRef('password')],
      'Both password need to be the same',
    ),
  }),
});

const SignUpForm = () => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: '',
      passwordRepeat: '',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      const response = authAPI.signUp({
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <CommonWrapper>
      <Wrapper>
        <form
          onSubmit={formik.handleSubmit}
          className="form-wrapper">
          <h1 className="title">Sign Up</h1>

          <div className="input-wrapper">
            <div className="form">
              <img src={mail} className="form__icon" />
              <input
                className="form__input"
                type="text"
                id="email"
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && typeof formik.errors.email === 'string'
                ? (<div>{formik.errors.email}</div>)
                : null
              }
            </div>
            <p className="form__text">Enter your email</p>

            <div className="form">
              <img src={hide} className="form__icon" />
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && typeof formik.errors.password === 'string'
                ? (<div>{formik.errors.password}</div>)
                : null
              }
            </div>
            <p className="form__text">Enter your password</p>

            <div className="form">
              <img src={hide} className="form__icon" />
              <input
                className="form__input"
                type="password"
                id="passwordRepeat"
                placeholder="Password replay"
                {...formik.getFieldProps('passwordRepeat')}
              />
              {formik.touched.passwordRepeat && typeof formik.errors.passwordRepeat === 'string'
                ? (<div>{formik.errors.passwordRepeat}</div>)
                : null
              }
            </div>
            <p className="form__text">Repeat your password without errors</p>
          </div>
          <button type="submit" className="button">
            <CommonButton text="Sign up" />
          </button>
        </form>
        <img src={man} />
      </Wrapper>
    </CommonWrapper>
  );
};

export default SignUpForm;
