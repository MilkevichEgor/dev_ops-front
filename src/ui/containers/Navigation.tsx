import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from '../pages/auth/SignIn';
import SignUpForm from '../pages/auth/SignUp';
import Home from '../pages/home';
import Cart from '../pages/card/Card';
import UserProfile from '../pages/userProfile/UserProfile';
import { routePath } from '../../constants';
import RequireAuth from '../components/RequireAuth';
import ProductPage from '../pages/productPage/ProductPage';
import SearchResult from '../components/SearchResult';

const Navigation = () => {
  return (
    <Routes>
      <Route path={routePath.home} element={<Home />} />
      <Route path={`${routePath.product}/:id`} element={<ProductPage />} />
      <Route
        path={routePath.signIn}
        element={(
          <RequireAuth
            redirectTo={routePath.home}
            noAuthOnly
          >
            <SignInForm />
          </RequireAuth>
        )} />

      <Route
        path={routePath.signUp}
        element={(
          <RequireAuth
            redirectTo={routePath.home}
            noAuthOnly
          >
            <SignUpForm />
          </RequireAuth>
        )} />

      <Route
        path={routePath.cart}
        element={(
          <RequireAuth
            redirectTo={routePath.signIn}
          >
            <Cart />
          </RequireAuth>
        )}
      />

      <Route
        path={routePath.profile}
        element={(
          <RequireAuth
            redirectTo={routePath.signIn}
          >
            <UserProfile />
          </RequireAuth>
        )}
      />

      <Route
        path={routePath.search}
        element={<SearchResult />}
      />

      <Route path="*" element={(
        <h1>PAGE NOT FOUND!!!</h1>
      )} />
    </Routes>
  );
};

export default Navigation;
