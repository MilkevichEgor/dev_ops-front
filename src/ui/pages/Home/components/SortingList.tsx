import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QuerySearchOptions } from '../../../../api/bookApi';
import SortingListWrapper from './SortingList.styles';

type SortingListProps = {
  querySearchOptions: QuerySearchOptions
}

const SortingList: React.FC<SortingListProps> = (props) => {
  const [checkedOrder, setCheckedOrder] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const applySortOrder = (value: string) => {
    props.querySearchOptions.order = value;
    if (props.querySearchOptions.orderDir === 'ASC') {
      props.querySearchOptions.orderDir = 'DESC';

      return;
    }
    props.querySearchOptions.orderDir = 'ASC';

    setCheckedOrder(value);
    console.log('value', value);
  };

  return (
    <SortingListWrapper>
      <ul>
        <li
          onClick={() => {
            applySortOrder('price');
          }}
        >
          Price
        </li>
        <li
          onClick={() => {
            applySortOrder('title');
          }}
        >
          Name
        </li>
        <li
          onClick={() => {
            applySortOrder('author');
          }}
        >
          Author Name
        </li>
        <li
          onClick={() => {
            applySortOrder('rating');
          }}
        >
          Rating
        </li>
        <li
          onClick={() => {
            applySortOrder('dateOfIssue');
          }}
        >
          Date of issue
        </li>
      </ul>
    </SortingListWrapper>
  );
};

export default SortingList;
