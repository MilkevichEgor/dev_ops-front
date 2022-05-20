import React from 'react';
import { FormikValues, useFormik } from 'formik';
import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import YupRef from 'yup/lib/Reference';
import authAPI from '../../../api/authApi';

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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && typeof formik.errors.email === 'string'
        ? (<div>{formik.errors.email}</div>)
        : null
      }

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && typeof formik.errors.password === 'string'
        ? (<div>{formik.errors.password}</div>)
        : null
      }

      <label htmlFor="passwordRepeat">Password: </label>
      <input
        type="password"
        id="passwordRepeat"
        placeholder="Password replay"
        {...formik.getFieldProps('passwordRepeat')}
      />
      {formik.touched.passwordRepeat && typeof formik.errors.passwordRepeat === 'string'
        ? (<div>{formik.errors.passwordRepeat}</div>)
        : null
      }

      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUpForm;
