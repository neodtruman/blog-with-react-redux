import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { bookmarkReducer } from './bookmark/bookmark.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  bookmark: bookmarkReducer
});
