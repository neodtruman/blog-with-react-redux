const PostsPage = (props) => {
  return (
    <div>
      {props.posts.map(post => <h1 key={post.slug}>{post.title}</h1>)}
    </div>
  );
}

export default PostsPage;
