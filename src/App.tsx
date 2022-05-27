import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import Header from './ui/containers/Header/Header';
import Footer from './ui/containers/Footer';
import Navigation from './ui/containers/Navigation';
import { routePath } from './constants';
import authApi from './api/authApi';
import { useAppDispatch } from './store';
import { setUser } from './store/reducer';
import { User } from './types';

const App = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const setUserInStore = (user: User) => {
    dispatch(setUser(user));
  };
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) {
          return <Navigate to={routePath.signIn} />;
        }
        const response = await authApi.checkToken(token);
        setUserInStore(response.data.user);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    checkToken();
  });
  // const checkToken = async () => {
  //   try {
  //     const token = Cookies.get('token');
  //     if (!token) {
  //       return <Navigate to={routePath.signIn} />;
  //     }

  //     const response = await authApi.checkToken(token);
  //     setTimeout(() => {
  //       setUserInStore(response.data.user);
  //       setLoading(true);
  //     }, 1000);
  //     console.log('loading >>>', loading);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // checkToken();

  return (
    <>
      <Header />
      {!loading
        ? <div>LOADING</div>
        : <Navigation />
      }
      <Footer />
    </>
  );
};

export default App;
