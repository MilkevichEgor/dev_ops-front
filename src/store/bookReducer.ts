import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Books } from '../types';

export interface Store {
  userReducer: State,
  bookReducer: State
}

export interface State {
  books: Books | [],
}

const initialState: State = {
  books: [],
};

export const bookReducer = createSlice({
  initialState,
  name: 'books',
  reducers: {
    setBooks: (state, action: PayloadAction<Books>) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = bookReducer.actions;

export default bookReducer.reducer;
