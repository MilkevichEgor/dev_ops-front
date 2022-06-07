import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import forwardIcon from '../../../images/forwardIcon.png';
import CatalogWrapper from './Catalog.styles';
import CommonWrapper from '../../../styles/CommonWrapper';
import BooksList from './Books';
import GenresCheckbox from './GenresCheckbox';
import PriceFilter from './PriceRangeFilter';
import SortingList from './SortingList';
import { QuerySearchOptions } from '../../../../api/bookApi';

const Catalog = () => {
  const [isGenresSelect, setIsGenresSelect] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const toggleIsGenresSelect = () => {
    setIsGenresSelect(!isGenresSelect);
  };

  const querySearchOptions: QuerySearchOptions = {
  };

  const onSubmit = (values: string[]) => {
    const arr = queryString.stringify(
      querySearchOptions,
      // {
      //   genres: values,
      // },
      {
        arrayFormat: 'comma',
      },
    );
    setSearchParams(arr);
  };

  return (
    <CommonWrapper>
      <CatalogWrapper>
        <h1 className="title">Catalog</h1>
        <div className="form">
          <div
            className="filterWrapper input"
            onClick={toggleIsGenresSelect}
          >
            <p className="filter">Genre</p>
            <img src={forwardIcon} className="icon" />
            {isGenresSelect &&
              <GenresCheckbox
                toggleGenreSelector={toggleIsGenresSelect}
                onSubmit={onSubmit}
              />
            }
          </div>
          <div className="filterWrapper input">
            <p className="filter">Price</p>
            <img src={forwardIcon} className="icon" />
            {/* <PriceFilter /> */}
            {/* <input type="range" name="" id="" /> */}
          </div>
          <div className="filterWrapper input">
            <p className="filter">Sort by price</p>
            <img src={forwardIcon} className="icon" />
            <SortingList
              querySearchOptions={querySearchOptions}
            />
            {/* <input type="radio" name="" id="" /> */}
          </div>
        </div>
      </CatalogWrapper>
      <BooksList />
    </CommonWrapper>
  );
};

export default Catalog;
