import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import Navigation from './ui/containers/Navigation';
import { useAppDispatch } from './store';
import { setUser } from './store/userReducer';
import MainWrapper from './ui/styles/Main.styles';
import userApi from './api/userApi';

const App = () => {
  const dispatch = useAppDispatch();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    (async () => {
      const token = Cookies.get('token');
      await Promise.all([
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
        userApi.checkToken(token).then(({ data }) => console.log('RESULT', data)),
      ]);
      const response = await userApi.checkToken(token).catch(() => null);
      if (response) {
        dispatch(setUser(response.data.user));
      }
      setIsAuthChecked(true);
    })();
  }, [setIsAuthChecked, dispatch]);

  if (!isAuthChecked) {
    return null;
  }

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
