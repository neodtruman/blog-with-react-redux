import { Fragment, useEffect, useState } from 'react';

import { getFeaturedPosts } from '../utils/firebase.utils';

import PostsGrid from '../components/post/posts-grid.component';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeaturedPosts()
      .then(data => {
        if (!data || data.length === 0) {
          setError('Loading data failed!');
        }
        else {
          setPosts(data);
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setIsPending(false));
  }, []);

  return (
    <Fragment>
      <h1>Featured Posts</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts && <PostsGrid posts={posts} />}
    </Fragment>
  );
}

export default HomePage;
