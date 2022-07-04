import React, { useRef, useState } from 'react';
import forwardIcon from '../../../images/forwardIcon.png';
import CatalogWrapper from '../styles/Catalog.styles';
import CommonWrapper from '../../../styles/CommonWrapper.styles';
import BooksList from './BooksList';
import GenresCheckbox from './GenresCheckbox';
import PriceFilter from './PriceRangeFilter';
import SortingList from './SortingList';
import PaginationBlock from './PaginationBlock';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../types';
import useOutclick from '../../../../utils/useOutclick';

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

  const refGenre = useRef(null);
  const refPrice = useRef(null);
  const refOrder = useRef(null);

  useOutclick(refGenre, isGenresSelect, toggleIsGenresSelect);
  useOutclick(refPrice, isPriceRangeSelect, toggleIsPriceRangeSelect);
  useOutclick(refOrder, isOrderSelect, toggleIsOrderSelect);

  let sortByTitle = parsedParams.order || 'price';

  switch (sortByTitle) {
    case 'dateOfIssue':
      sortByTitle = 'date';
      break;
    case 'averageRate':
      sortByTitle = 'rating';
      break;
    case 'title':
      sortByTitle = 'name';
      break;
    default:
      break;
  }

  const dropdownsList = [
    {
      title: 'Genre',
      state: isGenresSelect,
      children: <GenresCheckbox />,
      toggle: toggleIsGenresSelect,
      ref: refGenre,
    },
    {
      title: 'Price',
      state: isPriceRangeSelect,
      children: (
        <PriceFilter
          min={1}
          max={100}
        />
      ),
      toggle: toggleIsPriceRangeSelect,
      ref: refPrice,
    },
    {
      title: `Sort by ${sortByTitle}`,
      state: isOrderSelect,
      children: <SortingList />,
      toggle: toggleIsOrderSelect,
      ref: refOrder,
    },
  ];

  return (
    <CommonWrapper>
      <CatalogWrapper>
        <h1 className="filter__title">
          Catalog
        </h1>
        <div
          className="filter__form"
        >
          {dropdownsList.map((filter) => {
            return (
              <div
                ref={filter.ref}
                key={filter.title}
                className="filter__wrapper"
                onClick={() => filter.toggle()}
              >
                <p className="filter__name">
                  {filter.title}
                </p>
                <img
                  src={forwardIcon}
                  className="filter__icon"
                />
                {filter.state && filter.children}
              </div>
            );
          })}
        </div>
      </CatalogWrapper>
      <BooksList />
      <PaginationBlock />
    </CommonWrapper>
  );
};

export default Catalog;
