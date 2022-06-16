import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../store';
import arrow from '../../../images/pageForwardArrow.png';
import PaginationWrapper from '../styles/PaginationBlock.styles';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../types';

const PaginationBlock = () => {
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();
  const [currentPage, setCurrentPage] = useState<number>();
  const totalPages = useAppSelector((state) => state.bookReducer.pages);

  useEffect(() => {
    if (!currentPage) {
      if (!parsedParams.page) {
        console.log('!currentPage');
        setCurrentPage(1);
      } else {
        console.log('currentPage');
        setCurrentPage(+parsedParams.page);
      }
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    if (currentPage) {
      if (totalPages > 0 && (currentPage > totalPages || !parsedParams.page)) {
        setCurrentPage(1);
      }
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

  const turnPage = (page: number) => {
    setCurrentPage(page);
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
          <div className="pages">
            {new Array(totalPages).fill(1).map((page, index) => {
              let style = 'page';
              if (index + 1 === currentPage) {
                style = 'page page__current';
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
            className="arrow forward"
            alt="arrow forward"
            onClick={turnPageForward}
          />
        </PaginationWrapper>}
    </nav>
  );
};

export default PaginationBlock;
