import React from 'react';

import LoaderWrapper from './Loader.styles';

const loaderContent = new Array(12).fill(null).map((a, i) => (<div key={i} />));

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="lds-spinner">
        {loaderContent}
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
