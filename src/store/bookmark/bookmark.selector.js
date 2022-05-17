export const selectBookmarkItems = (state) => {
  console.log('selectBookmarkItems fired')
  return state.bookmark.bookmarkItems;
}

export const selectIsBookmarkOpen = (state) => {
  return state.bookmark.isBookmarkOpen;
}

export const selectBookmarkCount = (state) => state.bookmark.bookmarkItems.length;
