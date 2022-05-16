import { Fragment } from "react";
import classes from './posts-page.styles.module.css';

const PostsPage = (props) => {
  return (
    <Fragment>
      {props.posts.map(post =>
        <h1 key={post.slug} className={classes['heading-ele']}>
          {post.title}
        </h1>
      )}
    </Fragment>
  );
}

export default PostsPage;
