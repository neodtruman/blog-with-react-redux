import { Fragment, useEffect, useState } from 'react';

import { useFetch } from '../hooks/useFetch';

import classes from './posts-page.styles.module.css';

const PostsPage = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchString, setSearchString] = useState('');

  const url = '/posts.json';
  const { error, isPending, data: postsData } = useFetch(url);

  const onSearchChangeHandler = (event) => {
    const newSearchString = event.target.value.toLocaleLowerCase();
    setSearchString(newSearchString);
  }

  useEffect(() => {
    if (!postsData) {
      return;
    }
    const newFilteredPosts = postsData.filter(post => {
      return post.title.toLocaleLowerCase().includes(searchString);
    });
    setFilteredPosts(newFilteredPosts);
  }, [searchString, postsData]);

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
      {postsData && filteredPosts.map(post =>
        <h2 key={post.slug}>{post.title}</h2>
      )}
    </Fragment>
  );
}

export default PostsPage;
