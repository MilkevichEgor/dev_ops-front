import React from 'react';

import Header from './ui/containers/Header/Header';
import Footer from './ui/containers/Footer';
import MainWrapper from './ui/styles/MainWrapper';
import Navigation from './ui/containers/Navigation';

const App = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Navigation />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default App;
