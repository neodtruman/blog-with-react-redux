import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectBookmarkItems } from '../../store/bookmark/bookmark.selector';

import classes from './bookmark-dropdown.styles.module.css';
import DropdownItem from './dropdown-item.component';

const BookmarkDropdown = () => {
  const bookmarkItems = useSelector(selectBookmarkItems);

  const navigate = useNavigate();
  const goToBookmarksHandler = () => {
    navigate('/bookmarks');
  }

  return (<div className={classes['bookmark-dropdown-container']}>
    <div className={classes['bookmark-items']}>
      {bookmarkItems && bookmarkItems.map(item => <DropdownItem key={item.id} bookmarkItem={item} />)}
    </div>
    <button
      className={classes['button']}
      onClick={goToBookmarksHandler}>
      GO TO BOOKMARKS
    </button>
  </div>
  )
};

export default BookmarkDropdown;
