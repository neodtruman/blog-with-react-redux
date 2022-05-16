import { Fragment } from "react";
import './posts-page.styles.css';

const PostsPage = (props) => {
  return (
    <Fragment>
      {props.posts.map(post =>
        <h1 key={post.slug} className="heading-ele">
          {post.title}
        </h1>
      )}
    </Fragment>
  );
}

export default PostsPage;
