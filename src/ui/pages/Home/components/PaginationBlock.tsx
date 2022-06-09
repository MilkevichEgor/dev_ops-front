import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { useAppSelector } from '../../../../store';
import arrow from '../../../images/pageForwardArrow.png';
import getQueryParams from '../../../../utils/getQueryParams';
import PaginationWrapper from './PaginationBlock.styles';

const PaginationBlock = () => {
  const totalPages = useAppSelector((state) => state.bookReducer.pages);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>();
  const query = getQueryParams(searchParams);

  useEffect(() => {
    if (!currentPage) {
      if (!query.page) {
        setCurrentPage(1);
      } else {
        setCurrentPage(+query.page);
      }
    }
  }, [totalPages]);

  useEffect(() => {
    if (currentPage) {
      if (currentPage > totalPages.length) {
        setCurrentPage(1);
      }

      query.page = currentPage.toString();
      const arr = queryString.stringify(query, { skipEmptyString: true });

      setSearchParams(arr);
    }
  }, [currentPage, totalPages]);

  const turnPage = (dir: 'back' | 'forward') => {
    if (!currentPage) {
      return;
    }
    switch (dir) {
      case 'forward':
        if (currentPage >= totalPages.length) break;
        setCurrentPage(currentPage + 1);
        break;
      case 'back':
        if (currentPage < 2) break;
        setCurrentPage(currentPage - 1);
        break;
      default:
        break;
    }
  };

  return (
    <nav>
      {totalPages.length > 1 &&
        <PaginationWrapper>
          <img
            src={arrow}
            className="arrow back"
            alt="back arrow"
            onClick={() => turnPage('back')}
          />
          {totalPages.map((page, index) => {
            let style = 'page';
            if (index + 1 === currentPage) {
              style = 'page page__current';
            }
            return (
              <div
                key={index}
                className={style}
              >

              </div>
            );
          }) || null}
          <img
            src={arrow}
            className="arrow forward"
            alt="arrow forward"
            onClick={() => turnPage('forward')}
          />
        </PaginationWrapper>}
    </nav>
  );
};

export default PaginationBlock;
