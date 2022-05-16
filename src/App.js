import { useEffect, useState } from 'react';
import PostsPage from './pages/posts-page.component';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const onSearchChangeHandler = (event) => {
    const newSearchString = event.target.value.toLocaleLowerCase();
    setSearchString(newSearchString);
  }

  const onButtonClickHandler = () => {
    setCounter(counter + 1);
  }

  console.log('Filtering posts...');
  const filteredPosts = posts.filter(post => {
    return post.title.toLocaleLowerCase().includes(searchString);
  });

  return (
    <div className="App">
      <div>Counter: {counter}
        <button onClick={onButtonClickHandler}>Increase Counter</button>
      </div>

      <input type='search' onChange={onSearchChangeHandler} />
      <PostsPage posts={filteredPosts} />
    </div>
  );
}

export default App;
