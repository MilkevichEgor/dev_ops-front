import { combineReducers } from 'redux';

import userReducer from './userReducer';
import bookReducer from './bookReducer';
import genreReducer from './genreReducer';

const rootReducer = combineReducers({
  userReducer,
  bookReducer,
  genreReducer,
});

export default rootReducer;
