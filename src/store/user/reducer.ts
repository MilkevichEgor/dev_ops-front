import { createAction, createReducer } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { User } from '../../types';
import { setUser } from './actions';

export interface State {
  user?: User
}

const initialState: State = {
  user: {},
};

export const addUser = createAction('user/set', (user: User) => {
  return {
    payload: user,
  };
});

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state: WritableDraft<State>, action) => {
      const user = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.user = user;
    });
});

export default userReducer;
