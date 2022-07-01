import React, { useEffect, useState } from 'react';
import bookApi from '../../../api/bookApi';
import { BooksArray } from '../../../types';
import BooksRender from '../../components/Book/BooksRender';
import CommonWrapper from '../../styles/CommonWrapper.styles';
import FavoritesWrapper from './Favorites.styles';

const Favorites = () => {
  const [books, setBooks] = useState<BooksArray>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await bookApi.getFavorite();
        setBooks(response.data);
      } catch (err) {
        console.log('ERROR:', err);
      }
    })();
  }, [setBooks]);

  const changeBookList = (id: number) => {
    const updatedList = books.filter((book) => book.bookId !== id);
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
