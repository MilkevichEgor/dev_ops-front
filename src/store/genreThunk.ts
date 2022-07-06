import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import bookApi from '../api/bookApi';

export const getAllGenres = createAsyncThunk(
  'books/getAllGenres',
  async () => {
    try {
      const response = await bookApi.getAllGenres();
      return response.data.genres;
    } catch (err) {
      toast.error('Sorry, we were unable to download the genres, something went wrong...',
        { autoClose: 5000 });
      throw (err);
    }
  },
);
