import { createAsyncThunk } from '@reduxjs/toolkit';
import bookApi from '../api/bookApi';

export const getAllGenres = createAsyncThunk(
  'books/getAllGenres',
  async () => {
    try {
      const response = await bookApi.getAllGenres();
      return response.data.genres;
    } catch (err) {
      console.error('ERROR >>', err);
    }
  },
);
