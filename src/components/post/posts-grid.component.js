import PostCard from './post-card.component';
import classes from './posts-grid.styles.module.css';

const PostsGrid = ({ posts, isBookmark }) => {
  return (
    <ul className={classes.grid}>
      {posts.map(p =>
        <PostCard
          key={p.id}
          post={p}
          isBookmark={isBookmark}
        />)}
    </ul>
  );
}

export default PostsGrid;
