import { memo } from 'react';

import classes from './dropdown-item.styles.module.css';

const DropdownItem = memo(({ bookmarkItem }) => {
  const { image, title, date } = bookmarkItem.data;
  const imageUrl = `/images/posts/${bookmarkItem.id}/${image}`;

  return (
    <div className={classes['bookmark-item-container']}>
      <div className={classes['item-image']}>
        <img src={imageUrl} alt={`${title}`} />
      </div>

      <div className={classes['item-details']}>
        <span className={classes['name']}>{title}</span>

        <div className={classes['date-container']}>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
});

export default DropdownItem;
