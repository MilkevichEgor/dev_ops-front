import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from '../pages/auth/SignIn';
import SignUpForm from '../pages/auth/SignUp';
import Home from '../pages/home';
import Cart from '../pages/cart';
import UserProfile from '../pages/userProfile';
import { routePath } from '../../constants';
import AuthDependentRenderController from '../components/AuthDependentRenderController';
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
          <AuthDependentRenderController
            redirectTo={routePath.home}
            noAuthOnly
          >
            <SignInForm />
          </AuthDependentRenderController>
        )}
      />

      <Route
        path={routePath.signUp}
        element={(
          <AuthDependentRenderController
            redirectTo={routePath.home}
            noAuthOnly
          >
            <SignUpForm />
          </AuthDependentRenderController>
        )}
      />

      <Route
        path={routePath.cart}
        element={(
          <AuthDependentRenderController
            redirectTo={routePath.signIn}
          >
            <Cart />
          </AuthDependentRenderController>
        )}
      />

      <Route
        path={routePath.profile}
        element={(
          <AuthDependentRenderController
            redirectTo={routePath.signIn}
          >
            <UserProfile />
          </AuthDependentRenderController>
        )}
      />

      <Route
        path={routePath.favorites}
        element={(
          <AuthDependentRenderController
            redirectTo={routePath.signIn}
          >
            <Favorites />
          </AuthDependentRenderController>
        )}
      />

      <Route path="*" element={(
        <h1>404! PAGE NOT FOUND!</h1>
      )}
      />
    </Routes>
  );
};

export default Navigation;
