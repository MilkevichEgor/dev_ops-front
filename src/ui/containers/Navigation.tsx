import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routePath } from '../../constants';
import AuthProtector from '../components/AuthProtector';
import Loader from '../components/Loader/Loader';
// import SignInForm from '../pages/auth/SignIn';
// import SignUpForm from '../pages/auth/SignUp';
// import Home from '../pages/home';
// import Cart from '../pages/cart';
// import UserProfile from '../pages/userProfile';
// import ProductPage from '../pages/productPage';
// import Favorites from '../pages/favorites';

const SignInForm = React.lazy(() => import('../pages/auth/SignIn'));
const SignUpForm = React.lazy(() => import('../pages/auth/SignUp'));
const Cart = React.lazy(() => import('../pages/cart'));
const Home = React.lazy(() => import('../pages/home'));
const UserProfile = React.lazy(() => import('../pages/userProfile'));
const ProductPage = React.lazy(() => import('../pages/productPage'));
const Favorites = React.lazy(() => import('../pages/favorites'));

const Navigation = () => {
  return (
    <Routes>
      <Route
        path={routePath.home}
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path={`${routePath.product}/:id`}
        element={
          <Suspense fallback={<Loader />}>
            <ProductPage />
          </Suspense>
        }
      />

      <Route
        path={routePath.signIn}
        element={(
          <AuthProtector
            redirectTo={routePath.home}
            noAuthOnly
          >
            <Suspense fallback={<Loader />}>
              <SignInForm />
            </Suspense>
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
            <Suspense fallback={<Loader />}>
              <SignUpForm />
            </Suspense>
          </AuthProtector>
        )}
      />

      <Route
        path={routePath.cart}
        element={(
          <AuthProtector
            redirectTo={routePath.signIn}
          >
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          </AuthProtector>
        )}
      />

      <Route
        path={routePath.profile}
        element={(
          <AuthProtector
            redirectTo={routePath.signIn}
          >
            <Suspense fallback={<Loader />}>
              <UserProfile />
            </Suspense>
          </AuthProtector>
        )}
      />

      <Route
        path={routePath.favorites}
        element={(
          <AuthProtector
            redirectTo={routePath.signIn}
          >
            <Suspense fallback={<Loader />}>
              <Favorites />
            </Suspense>
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
