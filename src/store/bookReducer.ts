import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAllBooksThunk, getRecommendations } from './bookThunk';

import constants from '../constants';
import { BookType } from '../types';

export const initialState = {
  books: [] as BookType[],
  pages: 0,
  searchResult: [] as BookType[],
  recommended: [] as BookType[],
};

export const bookReducer = createSlice({
  initialState,
  name: 'books',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled,
      (state, action) => {
        state.books = action.payload.books;
        state.pages = Math.ceil(action.payload.totalCount / constants.booksQuantityPerPage);
      });
    builder.addCase(getAllBooksThunk.rejected, (state) => {
      state.books = [];
      state.pages = 1;
    });
    builder.addCase(getRecommendations.fulfilled, (state, action: PayloadAction<BookType[]>) => {
      state.recommended = action.payload;
    });
    builder.addCase(getRecommendations.rejected, (state) => {
      state.recommended = [];
    });
  },
});

export default bookReducer.reducer;
