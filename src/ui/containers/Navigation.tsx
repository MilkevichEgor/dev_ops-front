import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from '../pages/auth/SignIn';
import SignUpForm from '../pages/auth/SignUp';
import Home from '../pages/home';
import Cart from '../pages/cart';
import UserProfile from '../pages/userProfile';
import { routePath } from '../../constants';
import AuthProtector from '../components/AuthProtector';
import ProductPage from '../pages/productPage';
import Favorites from '../pages/favorites';

const Navigation = () => {
  return (
    <Routes>
      <Route
        path={routePath.home}
        element={
          <Home />
        }
      />

      <Route
        path={`${routePath.product}/:id`}
        element={
          <ProductPage />
        }
      />

      <Route
        path={routePath.signIn}
        element={(
          <AuthProtector
            redirectTo={routePath.home}
            noAuthOnly
          >
            <SignInForm />
          </AuthProtector>
        )}
      />

      <Route
        path={routePath.signUp}
        element={(
          <AuthProtector
            redirectTo={routePath.home}
            noAuthOnly
          >
            <SignUpForm />
          </AuthProtector>
        )}
      />

      <Route
        path={routePath.cart}
        element={(
          <AuthProtector
            redirectTo={routePath.signIn}
          >
            <Cart />
          </AuthProtector>
        )}
      />

      <Route
        path={routePath.profile}
        element={(
          <AuthProtector
            redirectTo={routePath.signIn}
          >
            <UserProfile />
          </AuthProtector>
        )}
      />

      <Route
        path={routePath.favorites}
        element={(
          <AuthProtector
            redirectTo={routePath.signIn}
          >
            <Favorites />
          </AuthProtector>
        )}
      />

      <Route
        path="*"
        element={(
          <h1>404! PAGE NOT FOUND!</h1>
        )}
      />
    </Routes>
  );
};

export default Navigation;
