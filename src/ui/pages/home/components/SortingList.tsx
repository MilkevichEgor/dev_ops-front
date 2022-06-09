import React from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import SortingListWrapper from '../styles/SortingList.styles';
import getQueryParams from '../../../../utils/getQueryParams';
import arrowUpIcon from '../../../images/arrowUp.png';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../api/bookApi';

const SortingList = () => {
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();
  // const [searchParams, setSearchParams] = useSearchParams();

  const applySortOrder = (value: string) => {
    // const query = getQueryParams(searchParams);
    // query.order = value;
    // if (query.orderDir === 'ASC') {
    //   query.orderDir = 'DESC';
    // } else {
    //   query.orderDir = 'ASC';
    // }
    // const arr = queryString.stringify(
    //   query,
    // );
    // setSearchParams(arr);
    parsedParams.order = value;
    if (parsedParams.orderDir === 'ASC') {
      parsedParams.orderDir = 'DESC';
    } else {
      parsedParams.orderDir = 'ASC';
    }
    setParams(parsedParams);
  };

  return (
    <SortingListWrapper>
      <img src={arrowUpIcon} className="arrow-up" />
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
