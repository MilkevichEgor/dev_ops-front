import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../types';

interface UserState {
  user: User | null,
}

export const initialState: UserState = {
  user: null,
};

const userReducer = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
