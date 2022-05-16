import { useEffect, useState } from 'react';
import PostsPage from './pages/posts-page.component';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
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

  console.log('Filtering posts...');
  const filteredPosts = posts.filter(post => {
    return post.title.toLocaleLowerCase().includes(searchString);
  });

  return (
    <div className="App">
      <input type='search' onChange={onSearchChangeHandler} />
      <PostsPage posts={filteredPosts} />
    </div>
  );
}

export default App;
