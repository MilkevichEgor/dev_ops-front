import React from 'react';
import LoaderWrapper from './Loader.styles';

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
