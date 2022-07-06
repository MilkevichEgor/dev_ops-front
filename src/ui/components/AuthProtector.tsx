import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../store';

type PropsType = React.PropsWithChildren<{
  noAuthOnly?: boolean;
  redirectTo?: string;
}>

const AuthProtector: React.FC<PropsType> = (props) => {
  const user = useAppSelector((state) => state.userReducer.user);

  if (!user) {
    if (props.noAuthOnly) {
      return props.children as React.ReactElement;
    }
    if (props.redirectTo) {
      return <Navigate to={props.redirectTo} />;
    }

    return null;
  }

  if (props.noAuthOnly) {
    return props.redirectTo
      ? <Navigate to={props.redirectTo} />
      : null;
  }

  return props.children as React.ReactElement;
};

export default AuthProtector;
