import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from '../pages/auth/SignIn';
import SignUpForm from '../pages/auth/SignUp';
import Home from '../pages/Home/Home';
import UserProfile from '../pages/UserProfile/UserProfile';
import { routePath } from '../../constants';
import RequireAuth from '../components/RequireAuth';

const Navigation = () => {
  return (
    <Routes>
      <Route path={routePath.home} element={<Home />} />
      <Route path={routePath.signIn} element={<SignInForm />} />
      <Route path={routePath.signUp} element={<SignUpForm />} />
      <Route
        path={routePath.profile}
        element={
          <RequireAuth>
            <UserProfile />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default Navigation;
