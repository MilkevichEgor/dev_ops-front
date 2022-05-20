import React from 'react';
import { useFormik } from 'formik';
import YupString from 'yup/lib/string';
import YupObject from 'yup/lib/object';
import authAPI from '../../../api/authApi';

const signInValidationSchema = new YupObject().shape({
  email: new YupString().email('Invalid email address').required('Required'),
  password: new YupString().required('Required'),
});

const SignInForm = () => {
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
      console.log('response >>>', response);
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
      {formik.touched.email && formik.errors.email
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
      {formik.touched.password && formik.errors.password
        ? (<div>{formik.errors.password}</div>)
        : null
      }

      <button type="submit">Log In</button>
    </form>
  );
};

export default SignInForm;
