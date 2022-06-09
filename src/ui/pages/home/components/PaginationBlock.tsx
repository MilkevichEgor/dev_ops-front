import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { useAppSelector } from '../../../../store';
import arrow from '../../../images/pageForwardArrow.png';
import getQueryParams from '../../../../utils/getQueryParams';
import PaginationWrapper from '../styles/PaginationBlock.styles';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../api/bookApi';

const PaginationBlock = () => {
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>();
  const totalPages = useAppSelector((state) => state.bookReducer.pages);
  // const query = getQueryParams(searchParams);

  useEffect(() => {
    if (!currentPage) {
      // if (!query.page) {
      if (!parsedParams.page) {
        console.log('!currentPage');
        setCurrentPage(1);
      } else {
        console.log('currentPage');
        // setCurrentPage(+query.page);
        setCurrentPage(+parsedParams.page);
      }
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    if (currentPage) {
      // if (currentPage > totalPages || !query.page) {
      if (totalPages > 0 && (currentPage > totalPages || !parsedParams.page)) {
        setCurrentPage(1);
      }
      // query.page = currentPage.toString();
      // const arr = queryString.stringify(query, { skipEmptyString: true });

      // setSearchParams(arr);
      setParams({ page: currentPage.toString() });
    }
  }, [currentPage, totalPages]);

  const turnPageBack = () => {
    if (!currentPage || currentPage < 2) return;
    setCurrentPage(currentPage + 1);
  };

  const turnPageForward = () => {
    if (!currentPage || currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav>
      {totalPages > 1 &&
        <PaginationWrapper>
          <img
            src={arrow}
            className="arrow back"
            alt="back arrow"
            onClick={turnPageBack}
          />
          {new Array(totalPages).fill(1).map((page, index) => {
            let style = 'page';
            if (index + 1 === currentPage) {
              style = 'page page__current';
            }
            return (
              <div
                key={index}
                className={style}
              />
            );
          })}
          <img
            src={arrow}
            className="arrow forward"
            alt="arrow forward"
            onClick={turnPageForward}
          />
        </PaginationWrapper>}
    </nav>
  );
};

export default PaginationBlock;
