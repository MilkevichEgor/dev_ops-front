import React from 'react';
import forwardIcon from '../../../images/forwardIcon.png';
import CatalogWrapper from './Catalog.styles';
import CommonWrapper from '../../../styles/CommonWrapper';
import BooksList from './Books';

const Catalog = () => {
  return (
    <CommonWrapper>
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
      <BooksList />
    </CommonWrapper>
  );
};

export default Catalog;
