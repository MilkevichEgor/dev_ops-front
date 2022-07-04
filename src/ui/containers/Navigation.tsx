import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routePath } from '../../constants';
import AuthProtector from '../components/AuthProtector';
import Loader from '../components/Loader/Loader';

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
      {navigationList.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.isProtected
                ? (
                  <AuthProtector
                    redirectTo={route.redirectTo}
                    noAuthOnly={route.noAuthOnly}
                  >
                    <Suspense fallback={<Loader />}>
                      {<route.children />}
                    </Suspense>
                  </AuthProtector>
                )
                : (
                  <Suspense fallback={<Loader />}>
                    {<route.children />}
                  </Suspense>
                )
            }
          />
        );
      })}

      <Route
        path="*"
        element={(
          <h1>404! PAGE NOT FOUND!</h1>
        )}
      />
    </Routes>
  );
};

const navigationList = [
  {
    path: routePath.home,
    children: Home,
    redirectTo: undefined,
    noAuthOnly: false,
    isProtected: false,
  },
  {
    path: `${routePath.product}/:id`,
    children: ProductPage,
    redirectTo: undefined,
    noAuthOnly: false,
    isProtected: false,
  },
  {
    path: routePath.signIn,
    children: SignInForm,
    redirectTo: routePath.home,
    noAuthOnly: true,
    isProtected: true,
  },
  {
    path: routePath.signUp,
    children: SignUpForm,
    redirectTo: routePath.home,
    noAuthOnly: true,
    isProtected: true,
  },
  {
    path: routePath.cart,
    children: Cart,
    redirectTo: routePath.signIn,
    noAuthOnly: false,
    isProtected: true,
  },
  {
    path: routePath.profile,
    children: UserProfile,
    redirectTo: routePath.signIn,
    noAuthOnly: false,
    isProtected: true,
  },
  {
    path: routePath.favorites,
    children: Favorites,
    redirectTo: routePath.signIn,
    noAuthOnly: false,
    isProtected: true,
  },
];

export default Navigation;
