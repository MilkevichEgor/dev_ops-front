import React from 'react';
import SortingListWrapper from '../styles/SortingList.styles';
import arrowUpIcon from '../../../images/arrowUp.png';
import useQuery from '../../../../utils/useQuery';
import { BookSortOptions, QuerySearchOptions } from '../../../../types';

const SortingList = () => {
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();

  const applySortOrder = (value: BookSortOptions) => {
    parsedParams.order = value;

    if (parsedParams.orderDir === 'ASC') {
      parsedParams.orderDir = 'DESC';
    } else {
      parsedParams.orderDir = 'ASC';
    }
    setParams(parsedParams);
  };

  return (
    <SortingListWrapper >
      <img
        src={arrowUpIcon}
        className="sorting__arrow-up"
      />
      <ul>
        {sortArray.map((item) => {
          return (
            <li
              key={item.type}
              onClick={() => {
                applySortOrder(item.type);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </SortingListWrapper>
  );
};

export default SortingList;

const sortArray = [
  {
    title: 'Price',
    type: 'price' as BookSortOptions,
  },
  {
    title: 'Name',
    type: 'title' as BookSortOptions,
  },
  {
    title: 'Author',
    type: 'author' as BookSortOptions,
  },
  {
    title: 'Rating',
    type: 'averageRate' as BookSortOptions,
  },
  {
    title: 'Date of issue',
    type: 'dateOfIssue' as BookSortOptions,
  },
];
