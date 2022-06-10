import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Books } from '../types';

export interface BookState {
  books: Books | [],
  pages: number,
  searchResult: Books | []
}

export const initialState: BookState = {
  books: [],
  pages: 0,
  searchResult: [],
};

export const bookReducer = createSlice({
  initialState,
  name: 'books',
  reducers: {
    setBooks: (state, action: PayloadAction<Books>) => {
      state.books = action.payload;
    },
    setPagesQuantity: (state, action) => {
      state.pages = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<Books>) => {
      state.searchResult = action.payload;
    },
  },
});

export const {
  setBooks,
  setPagesQuantity,
  setSearchResult,
} = bookReducer.actions;

export default bookReducer.reducer;
