import { BOOKMARK_ACTION_TYPES } from './bookmark.types';

export const BOOKMARK_INITIAL_STATE = {
  isBookmarkOpen: false,
  bookmarkItems: [],
}

export const bookmarkReducer = (state = BOOKMARK_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKMARK_ACTION_TYPES.SET_BOOKMARK_ITEMS:
      return {
        ...state,
        bookmarkItems: payload
      }
    case BOOKMARK_ACTION_TYPES.SET_IS_BOOKMARK_OPEN:
      return {
        ...state,
        isBookmarkOpen: payload
      }
    default:
      return state;
  }
}
