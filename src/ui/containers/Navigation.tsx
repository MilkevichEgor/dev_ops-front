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
const NotFound = React.lazy(() => import('../pages/notFound'));

type RouteType = {
  path: string;
  children: React.LazyExoticComponent<() => JSX.Element | null>;
  noAuthOnly?: boolean;
  isProtected?: boolean;
  redirectTo?: string;
}

const createElementWithOptions = (route: RouteType) => {
  const { isProtected = true, noAuthOnly = false } = route;

  const children = (
    <Suspense fallback={<Loader />}>
      <route.children />
    </Suspense>
  );

  if (!isProtected) {
    return children;
  }

  return (
    <AuthProtector
      redirectTo={route.redirectTo}
      noAuthOnly={noAuthOnly}
    >
      {children}
    </AuthProtector>
  );
};

const Navigation = () => {
  return (
    <Routes>
      {navigationList.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={createElementWithOptions(route)}
        />
      ))}
    </Routes>
  );
};

const navigationList = [
  {
    path: routePath.home,
    children: Home,
    isProtected: false,
  },
  {
    path: routePath.createProductURL(':id'),
    children: ProductPage,
    isProtected: false,
  },
  {
    path: routePath.signIn,
    children: SignInForm,
    redirectTo: routePath.home,
    noAuthOnly: true,
  },
  {
    path: routePath.signUp,
    children: SignUpForm,
    redirectTo: routePath.home,
    noAuthOnly: true,
  },
  {
    path: routePath.cart,
    children: Cart,
    redirectTo: routePath.signIn,
  },
  {
    path: routePath.profile,
    children: UserProfile,
    redirectTo: routePath.signIn,
  },
  {
    path: routePath.favorites,
    children: Favorites,
    redirectTo: routePath.signIn,
  },
  {
    path: '*',
    children: NotFound,
    isProtected: false,
  },
];

export default Navigation;
