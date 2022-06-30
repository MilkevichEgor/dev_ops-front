import { createAsyncThunk } from '@reduxjs/toolkit';
import bookApi, { GetAllBooksOptions } from '../api/bookApi';

export const getAllBooksThunk = createAsyncThunk(
  'books/getAllBooksThunk',
  async (data: GetAllBooksOptions) => {
    const response = await bookApi.getAllBooks(data);
    return response.data;
  },
);

export const getRecommendations = createAsyncThunk(
  'books/getRecommendations',
  async () => {
    const response = await bookApi.getRecommendations();
    return response.data;
  },
);
