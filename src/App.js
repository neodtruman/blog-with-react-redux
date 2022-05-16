import { Component } from 'react';
import PostsPage from './pages/posts-page.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  };

  onSearchChangeHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState({ searchString });
  }

  render() {
    const filteredPosts = this.state.posts.filter(post => {
      return post.title.toLocaleLowerCase().includes(this.state.searchString);
    });

    const obj = {
      name: 'Neo'
    };

    return (
      <div className="App">
        <input type='search' onChange={this.onSearchChangeHandler} />
        <PostsPage posts={filteredPosts} anObject={obj} >
          <span>My Post List</span>
          <span>End of List</span>
        </PostsPage>
      </div>
    );
  }
}

export default App;
