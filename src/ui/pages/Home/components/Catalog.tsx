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
import getQueryParams from '../../../../utils/getQueryParams';

const Catalog = () => {
  const [isGenresSelect, setIsGenresSelect] = useState(false);
  const [isOrderSelect, setIsOrderSelect] = useState(false);
  const [isPriceRangeSelect, setIsPriceRangeSelect] = useState(false);
  const [querySearchParams, setQuerySearchParams] = useState<QuerySearchOptions | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleIsGenresSelect = () => {
    setIsGenresSelect(!isGenresSelect);
  };
  const toggleIsPriceRangeSelect = () => {
    setIsPriceRangeSelect(!isPriceRangeSelect);
  };
  const toggleIsOrderSelect = () => {
    setIsOrderSelect(!isOrderSelect);
  };

  let sortByTitle = getQueryParams(searchParams).order || 'price';
  switch (sortByTitle) {
    case 'dateOfIssue':
      sortByTitle = 'date';
      break;
    case 'title':
      sortByTitle = 'name';
      break;
    default:
      break;
  }

  const changeQuery = (options: QuerySearchOptions) => {
    setQuerySearchParams(options);
    if (!querySearchParams) {
      return;
    }
    const arr = queryString.stringify(
      querySearchParams,
    );
    setSearchParams(arr);
    console.log('querySearchParams', options);
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
              />
            }
          </div>

          <div
            className="filterWrapper input"
            onClick={toggleIsPriceRangeSelect}
          >
            <p className="filter">Price</p>
            <img src={forwardIcon} className="icon" />
            {isPriceRangeSelect &&
              <PriceFilter
                min={1}
                max={999}
              />
            }
          </div>

          <div
            className="filterWrapper input"
            onClick={toggleIsOrderSelect}
          >
            <p className="filter">Sort by {sortByTitle}</p>
            <img src={forwardIcon} className="icon" />
            {isOrderSelect &&
              <SortingList
                querySearchOptions={querySearchParams}
                changeQuery={changeQuery}
              />
            }
          </div>
        </div>
      </CatalogWrapper>
      <BooksList />
    </CommonWrapper>
  );
};

export default Catalog;
