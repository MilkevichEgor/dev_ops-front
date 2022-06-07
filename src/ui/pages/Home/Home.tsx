import React from 'react';
import Banner from './components/Banner';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import Catalog from './components/Catalog';
import { useAppSelector } from '../../../store';

const Home = () => {
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <>
      <Banner />
      <Catalog />
      {!user && <AuthorizeBanner />}
    </>
  );
};
export default Home;
