import { BOOKMARK_ACTION_TYPES } from "./bookmark.types";

const addBookmarkItem = (bookmarkItems, postToAdd) => {
  const existingItem = bookmarkItems.find(i => i.id === postToAdd.id);

  if (!existingItem) {
    return [...bookmarkItems, postToAdd];
  }
  else {
    return bookmarkItems;
  }
}

const removeBookmarkItem = (bookmarkItems, postToRemove) => {
  const existingItem = bookmarkItems.find(i => i.id === postToRemove.id);

  if (existingItem) {
    return bookmarkItems.filter(i => i.id !== postToRemove.id);
  }
  else {
    return bookmarkItems;
  }
}

export const setIsBookmarkOpen = (boolean) => {
  return {
    type: BOOKMARK_ACTION_TYPES.SET_IS_BOOKMARK_OPEN,
    payload: boolean
  }
}

export const addItemToBookmarks = (bookmarkItems, bookmarkToAdd) => {
  const newBookmarkItems = addBookmarkItem(bookmarkItems, bookmarkToAdd);
  return {
    type: BOOKMARK_ACTION_TYPES.SET_BOOKMARK_ITEMS,
    payload: newBookmarkItems
  };
}
export const removeItemFromBookmark = (bookmarkItems, bookmarkItemToRemove) => {
  const newBookmarkItems = removeBookmarkItem(bookmarkItems, bookmarkItemToRemove);
  return {
    type: BOOKMARK_ACTION_TYPES.SET_BOOKMARK_ITEMS,
    payload: newBookmarkItems
  };
}
