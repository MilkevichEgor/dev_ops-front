import React, { useState } from 'react';
import forwardIcon from '../../../images/forwardIcon.png';
import CatalogWrapper from '../styles/Catalog.styles';
import CommonWrapper from '../../../styles/CommonWrapper';
import BooksList from './Books';
import GenresCheckbox from './GenresCheckbox';
import PriceFilter from './PriceRangeFilter';
import SortingList from './SortingList';
import PaginationBlock from './PaginationBlock';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../types';

const Catalog = () => {
  const [isGenresSelect, setIsGenresSelect] = useState(false);
  const [isOrderSelect, setIsOrderSelect] = useState(false);
  const [isPriceRangeSelect, setIsPriceRangeSelect] = useState(false);
  const [parsedParams] = useQuery<QuerySearchOptions>();

  const toggleIsGenresSelect = () => {
    setIsGenresSelect(!isGenresSelect);
  };
  const toggleIsPriceRangeSelect = () => {
    setIsPriceRangeSelect(!isPriceRangeSelect);
  };
  const toggleIsOrderSelect = () => {
    setIsOrderSelect(!isOrderSelect);
  };

  let sortByTitle = parsedParams.order || 'price';

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
                max={100}
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
              <SortingList />
            }
          </div>
        </div>
      </CatalogWrapper>
      <BooksList />
      <PaginationBlock />
    </CommonWrapper>
  );
};

export default Catalog;
