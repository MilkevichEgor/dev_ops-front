import React, { useEffect, useState } from 'react';

import { useAppSelector } from '../../../../store';

import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../types';

import PaginationWrapper from '../styles/PaginationBlock.styles';

import arrow from '../../../images/page-arrow.png';

const PaginationBlock = () => {
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();
  const [currentPage, setCurrentPage] = useState<number>();
  const totalPages = useAppSelector((state) => state.bookReducer.pages);

  useEffect(() => {
    if (!currentPage) {
      if (!parsedParams.page) {
        setCurrentPage(1);
      } else {
        setCurrentPage(+parsedParams.page);
      }
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    if (!currentPage) {
      return;
    }

    if (totalPages > 0 && (currentPage > totalPages || !parsedParams.page)) {
      setCurrentPage(1);
    }
    setParams({ page: currentPage.toString() });
  }, [currentPage, totalPages]);

  const turnPageBack = () => {
    if (!currentPage || currentPage < 2) return;
    setCurrentPage(currentPage + 1);
  };

  const turnPageForward = () => {
    if (!currentPage || currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const turnPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      {totalPages > 1 &&
        <PaginationWrapper>
          <img
            src={arrow}
            className="pagination__arrow pagination__back"
            alt="pagination__back pagination__arrow"
            onClick={turnPageBack}
          />
          <div className="pagination__pages">
            {new Array(totalPages).fill(1).map((page, index) => {
              let style = 'pagination__page';
              if (index + 1 === currentPage) {
                style = 'pagination__page pagination__page-current';
              }
              return (
                <div
                  key={index}
                  className={style}
                  onClick={() => turnPage(index + 1)}
                />
              );
            })}
          </div>
          <img
            src={arrow}
            className="pagination__arrow"
            alt="pagination__arrow"
            onClick={turnPageForward}
          />
        </PaginationWrapper>}
    </nav>
  );
};

export default PaginationBlock;
