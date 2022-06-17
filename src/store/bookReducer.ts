import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksArray } from '../types';

export interface BookState {
  books: BooksArray | [],
  pages: number,
  searchResult: BooksArray | []
  recommended: BooksArray | []
}

export const initialState: BookState = {
  books: [],
  pages: 0,
  searchResult: [],
  recommended: [],
};

export const bookReducer = createSlice({
  initialState,
  name: 'books',
  reducers: {
    setBooks: (state, action: PayloadAction<BooksArray>) => {
      state.books = action.payload;
    },
    setPagesQuantity: (state, action) => {
      state.pages = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<BooksArray>) => {
      state.searchResult = action.payload;
    },
    setRecommended: (state, action: PayloadAction<BooksArray>) => {
      state.recommended = action.payload;
    },
  },
});

export const {
  setBooks,
  setPagesQuantity,
  setSearchResult,
  setRecommended,
} = bookReducer.actions;

export default bookReducer.reducer;
