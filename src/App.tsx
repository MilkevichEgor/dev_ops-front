import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './ui/containers/Header/Header';
import SignInForm from './ui/pages/Auth/SignIn';
import SignUpForm from './ui/pages/Auth/SignUp';
import Home from './ui/pages/Home';
import Footer from './ui/containers/Footer';
import UserProfile from './ui/pages/UserProfile/UserProfile';
import MainWrapper from './ui/styles/MainWrapper';

const App = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/me" element={<UserProfile />} />
        </Routes>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default App;
