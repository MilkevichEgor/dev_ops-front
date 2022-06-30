import { createAsyncThunk } from '@reduxjs/toolkit';
import bookApi from '../api/bookApi';

export const getAllGenres = createAsyncThunk(
  'books/getAllGenres',
  async () => {
    const response = await bookApi.getAllGenres();
    return response.data.genres;
  },
);
