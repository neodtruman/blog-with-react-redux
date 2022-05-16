import { Fragment, useEffect, useState } from 'react';
import classes from './posts-page.styles.module.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const onSearchChangeHandler = (event) => {
    const newSearchString = event.target.value.toLocaleLowerCase();
    setSearchString(newSearchString);
  }

  useEffect(() => {
    const newFilteredPosts = posts.filter(post => {
      return post.title.toLocaleLowerCase().includes(searchString);
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

      {filteredPosts.map(post =>
        <h2 key={post.slug}>{post.title}</h2>
      )}
    </Fragment>
  );
}

export default PostsPage;
