import { Fragment, useEffect, useState } from 'react';

import { getAllPosts } from '../utils/firebase.utils';

import PostsGrid from '../components/post/posts-grid.component';
import classes from './posts-page.styles.module.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchString, setSearchString] = useState('');

  const onSearchChangeHandler = (event) => {
    const newSearchString = event.target.value.toLocaleLowerCase();
    setSearchString(newSearchString);
  }

  useEffect(() => {
    getAllPosts()
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

  useEffect(() => {
    const newFilteredPosts = posts.filter(post => {
      return post.data.title.toLocaleLowerCase().includes(searchString);
    });
    setFilteredPosts(newFilteredPosts);
  }, [searchString, posts]);

  return (
    <Fragment>
      <h1>
        <span>All Posts</span>
        <input
          className={classes['filter-box']}
          type='search'
          onChange={onSearchChangeHandler}
          placeholder='Filter by title'
        />
      </h1>

      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts && <PostsGrid posts={filteredPosts} />}
    </Fragment>
  );
}

export default PostsPage;
