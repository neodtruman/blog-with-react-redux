import { createSelector } from "reselect";

const selectBookmarkItemsReducer = (state) => state.bookmark.bookmarkItems;

export const selectBookmarkItems = createSelector(
  [selectBookmarkItemsReducer],
  (bookmarkItems) => {
    console.log('new selectBookmarkItems fired', bookmarkItems)
    return bookmarkItems;
  }
);

const selectIsBookmarkOpenReducer = (state) => state.bookmark.isBookmarkOpen;

export const selectIsBookmarkOpen = createSelector(
  [selectIsBookmarkOpenReducer],
  (isBookmarkOpen) => {
    return isBookmarkOpen;
  }
);

const selectBookmarkCountReducer = (state) => state.bookmark.bookmarkItems.length;

export const selectBookmarkCount = createSelector(
  [selectBookmarkCountReducer],
  (bookmarkCounter) => {
    return bookmarkCounter;
  }
);
