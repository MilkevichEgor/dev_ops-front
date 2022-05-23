import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './ui/pages/Home/components/Header';
import SignInForm from './ui/pages/Auth/SignIn';
import SignUpForm from './ui/pages/Auth/SignUp';
import Home from './ui/pages/Home';
import Footer from './ui/components/Footer';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignInForm />} />
        <Route path="/signUp" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  background: white;
  margin: auto;
`;
