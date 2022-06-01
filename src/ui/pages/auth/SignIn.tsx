import React from 'react';
import { useFormik } from 'formik';
import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import { Link, useNavigate } from 'react-router-dom';

import authAPI from '../../../api/authApi';
import Wrapper from '../../styles/Auth.styles';
import man from '../../images/man.png';
import hide from '../../images/hide.png';
import mail from '../../images/mail.png';
import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../styles/CommonWrapper';
import { setUser } from '../../../store/reducer';
import { routePath } from '../../../constants';
import CommonInputField from '../../components/CommonInputField';
import { useAppDispatch } from '../../../store';

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
        if (response.status === 200) {
          return navigate(`${routePath.home}`);
        }
      } catch (error) {
        console.log('ERROR>>', error);
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
          <h1 className="title">Log In</h1>

          <div className="input-wrapper">
            <CommonInputField
              icon={mail}
              name="email"
              placeholder="Email"
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
          <h4 className="question">
            Don`t you have an account yet?
            <Link to={routePath.signUp} className="button">
              <span>Let`s sign up!</span>
            </Link>
          </h4>
        </form>
        <img className="image" src={man} />
      </Wrapper>
    </CommonWrapper>
  );
};

export default SignInForm;
