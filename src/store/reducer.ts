import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

export interface Store {
  userReducer: State
}

export interface State {
  user: User | null,
}

const initialState: State = {
  user: null,
};

const userReducer = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
