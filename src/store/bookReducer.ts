import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllBooksThunk, getRecommendations } from './bookThunk';
import constants from '../constants';
import { BooksArray } from '../types';

export const initialState = {
  books: [] as BooksArray,
  pages: 0,
  searchResult: [] as BooksArray,
  recommended: [] as BooksArray,
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
