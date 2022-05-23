import React from 'react';
import forwardIcon from '../../Images/forwardIcon.png';
import CatalogWrapper from './Catalog.styles';

const Catalog = () => {
  return (
    <CatalogWrapper>
      <h1 className="title">Catalog</h1>
      <form className="form">
        <div className="input">
          <p className="filter">Genre</p>
          <img src={forwardIcon} className="icon" />
          {/* <input type="checkbox" name="" id="" /> */}
        </div>
        <div className="input">
          <p className="filter">Price</p>
          <img src={forwardIcon} className="icon" />
          {/* <input type="range" name="" id="" /> */}
        </div>
        <div className="input">
          <p className="filter">Sort by price</p>
          <img src={forwardIcon} className="icon" />
          {/* <input type="radio" name="" id="" /> */}
        </div>
      </form>
    </CatalogWrapper>
  );
};

export default Catalog;
