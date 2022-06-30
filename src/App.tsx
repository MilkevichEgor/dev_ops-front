import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { io } from 'socket.io-client';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import Navigation from './ui/containers/Navigation';
import { useAppDispatch } from './store';
import { setUser } from './store/userReducer';
import MainWrapper from './ui/styles/Main.styles';
import userApi from './api/userApi';

export const socket = io('http://localhost:4000');

const App = () => {
  const dispatch = useAppDispatch();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const listener = () => {
      console.log(`Connected with socket id: ${socket.id}`);
    };
    socket.on('connect', listener);

    return () => {
      socket.off('connect', listener);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const token = Cookies.get('token');
      if (!token) {
        setIsAuthChecked(true);

        return;
      }
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
