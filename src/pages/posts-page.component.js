import { Component } from 'react';

class PostsPage extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>--- {this.props.children[0]} ---</h1>
        {this.props.posts.map(post => <h1 key={post.slug}>{post.title}</h1>)}
        <p>--- {this.props.children[1]} ---</p>
      </div>
    );
  }
}

export default PostsPage;
