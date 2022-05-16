import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        { id: '1', title: 'Post 1' },
        { id: '2', title: 'Post 2' },
        { id: '3', title: 'Post 3' }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => <h1 key={post.id}>{post.title}</h1>)}
      </div>
    );
  }
}

export default App;
