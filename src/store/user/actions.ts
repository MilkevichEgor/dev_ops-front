import { createAction } from '@reduxjs/toolkit';
import { User } from '../../types';

export const setUser = createAction('user/set', (user: User) => {
  return {
    payload: user,
  };
});
