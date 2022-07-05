import React, { useMemo } from 'react';
import CatalogWrapper from '../styles/Catalog.styles';
import CommonWrapper from '../../../styles/CommonWrapper.styles';
import BooksList from './BooksList';
import DropdownMenu from './DropdownMenu';
import GenresCheckbox from './GenresCheckbox';
import PriceFilter from './PriceRangeFilter';
import SortingList from './SortingList';
import PaginationBlock from './PaginationBlock';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../types';

const Catalog = () => {
  const [parsedParams] = useQuery<QuerySearchOptions>();

  const order = useMemo(() => {
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

    return sortByTitle;
  }, [parsedParams.order]);

  const dropdownsList = [
    {
      title: 'Genre',
      children: <GenresCheckbox />,
    },
    {
      title: 'Price',
      children: (
        <PriceFilter
          min={1}
          max={100}
        />
      ),
    },
    {
      title: `Sort by ${order}`,
      children: <SortingList />,
    },
  ];

  return (
    <CommonWrapper>
      <CatalogWrapper>
        <h1 className="filter__title">
          Catalog
        </h1>
        <div className="filter__form">
          {dropdownsList.map((filter) => {
            return (
              <DropdownMenu
                key={filter.title}
                title={filter.title}
              >
                {filter.children}
              </DropdownMenu>
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
