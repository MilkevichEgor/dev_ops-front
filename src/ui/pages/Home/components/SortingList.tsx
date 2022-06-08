import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { QuerySearchOptions } from '../../../../api/bookApi';
import SortingListWrapper from './SortingList.styles';

type SortingListProps = {
  querySearchOptions: QuerySearchOptions | undefined;
  changeQuery: (options: QuerySearchOptions) => void;
}

const SortingList: React.FC<SortingListProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const applySortOrder = (value: string) => {
    const query = {} as QuerySearchOptions;
    searchParams.forEach((value, key) => {
      Object.assign(query, { [key]: value });
    });
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
