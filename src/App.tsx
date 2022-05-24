import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './ui/containers/Header/Header';
import SignInForm from './ui/pages/Auth/SignIn';
import SignUpForm from './ui/pages/Auth/SignUp';
import Home from './ui/pages/Home';
import Footer from './ui/containers/Footer';
import UserProfile from './ui/pages/UserProfile/UserProfile';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignInForm />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/me" element={<UserProfile />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
