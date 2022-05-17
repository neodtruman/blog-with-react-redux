import { Link } from 'react-router-dom';

import { getShortDate } from '../../utils/datetime.utils';

import classes from './post-card.styles.module.css';

const PostCard = ({ post }) => {
  const { id, data } = post;
  const { title, image, excerpt, date } = data;

  const imagePath = `/images/posts/${id}/${image}`;
  const linkPath = `/posts/${id}`;

  return (
    <li className={classes.post}>
      <Link to={linkPath}>
        <div className={classes.image}>
          <img src={imagePath} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{getShortDate(date)}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostCard;
