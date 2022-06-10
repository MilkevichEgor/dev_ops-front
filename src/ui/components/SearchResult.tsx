import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookApi, { QuerySearchOptions } from '../../api/bookApi';
import { routePath } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store';
import { setSearchResult } from '../../store/bookReducer';
import { Book } from '../../types';
import useQuery from '../../utils/useQuery';
import BooksWrapper from '../pages/home/styles/Books.styles';
import CommonWrapper from '../styles/CommonWrapper';
import CommonButton from './CommonButton';

const SearchResult = () => {
  const searchResult = useAppSelector((state) => state.bookReducer.searchResult);
  const dispatch = useAppDispatch();
  const [parsedParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    (async () => {
      try {
        const response = await bookApi.searchForValue(parsedParams);
        dispatch(setSearchResult(response.data.data));
        console.log('response.data', response.data.data);
        console.log('searchResult', searchResult);
      } catch (err) {
        console.log('ERROR >>', err);
      }
    })();
  }, [dispatch, parsedParams]);

  if (searchResult.length === 0) {
    return null;
  }

  return (
    <CommonWrapper>
      <BooksWrapper>
        {searchResult.map((book: Book) => {
          return (
            <div
              className="book"
              key={book.bookId}
            >
              <Link to={`${routePath.product}/${book.bookId}`}>
                <img
                  src={book.cover}
                  className="cover"
                  alt="book cover"
                />
                <p
                  className="title"
                >
                  {book.title}
                </p>
              </Link>
              <p
                className="author"
              >
                {book.author}</p>
              <CommonButton
                text={`$${book.price} USD`}
              />
            </div>
          );
        }) || null}
      </BooksWrapper>
    </CommonWrapper>
  );
};

export default SearchResult;
