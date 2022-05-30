import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { routePath } from '../../constants';

const RequireAuth: React.FC<{
  children: JSX.Element;
  shouldRedirect?: boolean;
  redirectTo?: string;
}> = ({ children, redirectTo }) => {
  const user = useAppSelector((state) => state.userReducer.user);

  if (!user) {
    if (redirectTo) {
      return <Navigate to={redirectTo} />;
    }

    return null;
  }

  return children;
};

export default RequireAuth;
