import { useEffect, useState } from 'react';
import PostsPage from './pages/posts-page.component';
import './App.css';

const App = () => {
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
    <div className="App">
      <h1 className="heading-ele">Welcome to my React app!</h1>
      <input type='search' onChange={onSearchChangeHandler} />
      <PostsPage posts={filteredPosts} />
    </div>
  );
}

export default App;
