import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genres } from '../types';

export interface GenreState {
  genres: Genres | [],
}

export const initialState: GenreState = {
  genres: [],
};

export const genreReducer = createSlice({
  initialState,
  name: 'genres',
  reducers: {
    setGenres: (state, action: PayloadAction<Genres>) => {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = genreReducer.actions;

export default genreReducer.reducer;
