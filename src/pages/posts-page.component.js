import { Fragment } from "react";

const PostsPage = (props) => {
  return (
    <Fragment>
      {props.posts.map(post => <h1 key={post.slug}>{post.title}</h1>)}
    </Fragment>
  );
}

export default PostsPage;
