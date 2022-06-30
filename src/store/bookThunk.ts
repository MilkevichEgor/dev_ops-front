import { createAsyncThunk } from '@reduxjs/toolkit';
import bookApi, { GetAllBooksOptions } from '../api/bookApi';

export const getAllBooksThunk = createAsyncThunk(
  'books/getAllBooksThunk',
  async (data: GetAllBooksOptions) => {
    try {
      const response = await bookApi.getAllBooks(data);
      return response.data;
    } catch (err) {
      console.log('ERROR >>', err);
    }
  },
);

export const getRecommendations = createAsyncThunk(
  'books/getRecommendations',
  async () => {
    try {
      const response = await bookApi.getRecommendations();
      return response.data;
    } catch (err) {
      console.log('ERROR >>', err);
    }
  },
);
