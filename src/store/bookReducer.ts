import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Books } from '../types';

export interface BookState {
  books: Books | [],
  pages: number[],
}

export const initialState: BookState = {
  books: [],
  pages: [1],
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
  },
});

export const { setBooks, setPagesQuantity } = bookReducer.actions;

export default bookReducer.reducer;
