import React from 'react';

import Banner from './components/Banner';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import Catalog from './components/Catalog';
import AuthProtector from '../../components/AuthProtector';

const Home = () => {
  return (
    <>
      <Banner />
      <div id="catalog">
        <Catalog />
      </div>
      <AuthProtector
        noAuthOnly
      >
        <AuthorizeBanner />
      </AuthProtector>
    </>
  );
};

export default Home;
