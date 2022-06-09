import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CommonButton from '../../../components/CommonButton';
import bookApi, { QuerySearchOptions } from '../../../../api/bookApi';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setBooks, setPagesQuantity } from '../../../../store/bookReducer';
import { Book } from '../../../../types';
import BooksWrapper from '../styles/Books.styles';
import { setGenres } from '../../../../store/genreReducer';
import getQueryParams from '../../../../utils/getQueryParams';
import constants, { routePath } from '../../../../constants';
import useQuery from '../../../../utils/useQuery';

// const useQuery = <QueryType extends object>() => {
//   const searchParams = useSearchParams();
//   const [URLSearchParams, setURLSearchParams] = searchParams;

//   const params = React.useMemo(() => {
//     return Array.from(URLSearchParams.entries()).reduce((acc, [key, value]) => {
//       acc[key] = value;
//       return acc;
//     }, {} as { [key: string]: string }) as QueryType;
//   }, [searchParams]);

//   const setParams = React.useCallback((data: Partial<QueryType>) => {
//     Object.entries(data).forEach(([key, value]) => {
//       URLSearchParams.set(key, value as string);
//     });
//     setURLSearchParams(URLSearchParams);
//   }, [URLSearchParams, setURLSearchParams]);

//   const data: [QueryType, typeof setParams] = React.useMemo(() => {
//     return [params, setParams];
//   }, [params, setParams]);

//   return data;
// };

const BooksList = () => {
  const books = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    // const search = getQueryParams(searchParams);
    (async () => {
      try {
        // const response = await bookApi.getAllBooks(search);
        const response = await bookApi.getAllBooks(parsedParams);

        dispatch(setBooks(response.data.books));
        const pagesQuantity = Math.ceil(
          response.data.pagesQuantity / constants.booksQuantityPerPage,
        );
        dispatch(setPagesQuantity(pagesQuantity));
      } catch (err) {
        console.log('ERROR >>', err);
      }
    })();
    // }, [dispatch, searchParams]);
  }, [dispatch, parsedParams]);

  useEffect(() => {
    (async () => {
      const response = await bookApi.getAllGenres();
      dispatch(setGenres(response.data.genres));
    })();
  }, [dispatch]);

  return (
    <BooksWrapper>
      {books.map((book: Book) => {
        return (
          <div
            className="book"
            key={book.bookId}
          >
            <Link to={routePath.getProductUrl(book.bookId)}>
            <img
              src={book.cover}
              className="cover"
              alt="book cover"
              // onClick={}
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
  );
};

export default BooksList;
