import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from '../pages/Auth/SignIn';
import SignUpForm from '../pages/Auth/SignUp';
import Home from '../pages/Home/Home';
import UserProfile from '../pages/UserProfile/UserProfile';
import { routePath } from '../../constants';

const Navigation = () => {
  return (
    <Routes>
      <Route path={routePath.home} element={< Home />} />
      < Route path={routePath.signIn} element={< SignInForm />} />
      < Route path={routePath.signUp} element={< SignUpForm />} />
      < Route path={routePath.profile} element={< UserProfile />} />
    </Routes>
  );
};

export default Navigation;
