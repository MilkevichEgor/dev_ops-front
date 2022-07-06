import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import bookApi from '../../../api/bookApi';
import { BooksArray } from '../../../types';

import BooksRender from '../../components/Book';
import CommonWrapper from '../../components/CommonWrapper.styles';
import FavoritesWrapper from './Favorites.styles';

const Favorites = () => {
  const [books, setBooks] = useState<BooksArray>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await bookApi.getFavorite();
        setBooks(response.data);
      } catch (err) {
        toast.error('Sorry, favorites is not available now', { autoClose: 3000 });
      }
    })();
  }, [setBooks]);

  const changeBookList = (id: number) => {
    const updatedList = books.filter((book) => {
      return book.bookId !== id;
    });
    setBooks(updatedList);
  };

  return (
    <CommonWrapper>
      <FavoritesWrapper>
        <h1 className="favorites__title">Favorites</h1>
        {books && (
          <BooksRender
            booksArray={books}
            wrap="wrap"
            handleFavorites={changeBookList}
          />
        )}
      </FavoritesWrapper>
    </CommonWrapper>
  );
};

export default Favorites;
