import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import { useAppSelector } from '../../../../store';
import arrow from '../../../images/pageForwardArrow.png';
import getQueryParams from '../../../../utils/getQueryParams';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 60px;
  .back {
    transform: rotate(180deg);
  }

  .arrow {
    margin: 0 36px;
  }

  .page {
    width: 9px;
    height: 9px;
    border: 3px solid #0D1821;
    border-radius: 50%;
    margin: 0 36px;
  }

  .page__current {
    background-color: #0D1821
  }
`;

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
  }, []);

  useEffect(() => {
    if (currentPage) {
      query.page = currentPage.toString();
      const arr = queryString.stringify(
        query,
      );

      setSearchParams(arr);
    }
  }, [currentPage]);

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
    </PaginationWrapper>
  );
};

export default PaginationBlock;
