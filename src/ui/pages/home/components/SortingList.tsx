import React from 'react';
import SortingListWrapper from '../styles/SortingList.styles';
import arrowUpIcon from '../../../images/arrowUp.png';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../types';

const SortingList = () => {
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();

  const applySortOrder = (value: string) => {
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
