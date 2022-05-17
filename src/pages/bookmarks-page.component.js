import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectBookmarkItems } from '../store/bookmark/bookmark.selector';

import PostsGrid from '../components/post/posts-grid.component';

const BookmarksPage = () => {
  const bookmarkItems = useSelector(selectBookmarkItems);
  return (
    <Fragment>
      <h1>Your Bookmarks</h1>
      <PostsGrid posts={bookmarkItems} isBookmark="true" />
    </Fragment>
  );
}

export default BookmarksPage;
