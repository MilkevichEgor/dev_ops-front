import React from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import SortingListWrapper from './SortingList.styles';
import getQueryParams from '../../../../utils/getQueryParams';

const SortingList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const applySortOrder = (value: string) => {
    const query = getQueryParams(searchParams);
    query.order = value;
    if (query.orderDir === 'ASC') {
      query.orderDir = 'DESC';
    } else {
      query.orderDir = 'ASC';
    }
    const arr = queryString.stringify(
      query,
    );
    setSearchParams(arr);
  };

  return (
    <SortingListWrapper>

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
    type: 'price',
  },
  {
    title: 'Name',
    type: 'title',
  },
  {
    title: 'Author',
    type: 'author',
  },
  {
    title: 'Rating',
    type: 'rating',
  },
  {
    title: 'Date of issue',
    type: 'dateOfIssue',
  },
];
