import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genres } from '../types';
import { getAllGenres } from './genreThunk';

export interface GenreState {
  genres: Genres | [],
}

export const initialState: GenreState = {
  genres: [],
};

export const genreReducer = createSlice({
  initialState,
  name: 'genres',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.fulfilled, (state, action: PayloadAction<Genres>) => {
      state.genres = action.payload;
    });
  },
});

export default genreReducer.reducer;
