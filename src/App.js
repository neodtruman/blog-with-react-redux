import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor');
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

    console.log('componentDidMount - state =', this.state);
  };

  onSearchChangeHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState({ searchString });
  }

  render() {
    console.log('render - state =', this.state);

    const filteredPosts = this.state.posts.filter(post => {
      return post.title.toLocaleLowerCase().includes(this.state.searchString);
    });
    console.log('render - filteredPosts =', filteredPosts);

    return (
      <div className="App">
        <input type='search' onChange={this.onSearchChangeHandler} />
        {filteredPosts.map(post => <h1 key={post.slug}>{post.title}</h1>)}
      </div>
    );
  }
}

export default App;
