import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store';

const RequireAuth: React.FC<{
  children: JSX.Element;
  noAuthOnly?: boolean;
  redirectTo: string;
}> = ({ children, redirectTo, noAuthOnly }) => {
  const user = useAppSelector((state) => state.userReducer.user);

  if (!user) {
    if (redirectTo) {
      return <Navigate to={redirectTo} />;
    }

    return null;
  }
  if (noAuthOnly) {
    return <Navigate to={redirectTo} />;
  }
  return children;
};

export default RequireAuth;
