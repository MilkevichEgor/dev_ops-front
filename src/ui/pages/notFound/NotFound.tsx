import React from 'react';
import { Link } from 'react-router-dom';

import { routePath } from '../../../constants';

import NotFoundWrapper from './NotFound.styles';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <p>
        Oups... Page not found!
      </p>
      <p>
        Go back &nbsp;
        <Link to={routePath.home} className="link">
          <span>home!</span>
        </Link>
      </p>
    </NotFoundWrapper>
  );
};

export default NotFound;
