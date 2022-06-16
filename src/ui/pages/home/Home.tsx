import React from 'react';

import Banner from './components/Banner';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import Catalog from './components/Catalog';
import AuthDependentRenderController from '../../components/AuthDependentRenderController';

const Home = () => {
  return (
    <>
      <Banner />
      <div id="catalog">
        <Catalog />
      </div>
      <AuthDependentRenderController
        noAuthOnly
      >
        <AuthorizeBanner />
      </AuthDependentRenderController>
    </>
  );
};

export default Home;
