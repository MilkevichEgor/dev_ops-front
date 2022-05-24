import React from 'react';
import Banner from './components/Banner';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import Catalog from './components/Catalog';

const Home = () => {
  return (
    <>
      <Banner />
      <Catalog />
      <AuthorizeBanner />
    </>
  );
};
export default Home;
