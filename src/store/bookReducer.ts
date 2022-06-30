import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllBooksThunk, getRecommendations } from './bookThunk';
import constants from '../constants';
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload.books;
      state.pages = Math.ceil(action.payload.totalCount / constants.booksQuantityPerPage);
    });
    builder.addCase(getRecommendations.fulfilled, (state, action: PayloadAction<BooksArray>) => {
      state.recommended = action.payload;
    });
  },
});

export default bookReducer.reducer;
