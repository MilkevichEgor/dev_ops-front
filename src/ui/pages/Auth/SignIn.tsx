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
import { setUser } from '../../../store/user/actions';

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
            <div className="form">
              <img src={mail} className="form__icon" />
              <input
                className="form__input"
                type="text"
                id="email"
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />

              {formik.touched.email && formik.errors.email
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

              {formik.touched.password && formik.errors.password
                ? (<div>{formik.errors.password}</div>)
                : null
              }
            </div>
            <p className="form__text">Enter your password</p>
          </div>
          <button type="submit" className="button">
            <CommonButton text="Log In" />
          </button>
          <h4>Don`t you have an account yet? Let`s sign up!</h4>
          <Link to="/signup" className="button">
            <CommonButton text="Sign Up" />
          </Link>
        </form>
        <img src={man} />
      </Wrapper>
    </CommonWrapper>
  );
};

export default SignInForm;
