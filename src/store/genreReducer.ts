import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '../types';
import { getAllGenres } from './genreThunk';

export interface GenreState {
  genres: Genre[] | [],
}

export const initialState: GenreState = {
  genres: [],
};

export const genreReducer = createSlice({
  initialState,
  name: 'genres',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.fulfilled, (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
    });
    builder.addCase(getAllGenres.rejected, (state) => {
      state.genres = [];
    });
  },
});

export default genreReducer.reducer;
