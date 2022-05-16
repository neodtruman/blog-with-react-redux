import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Neo'
    }
  }

  render() {
    return (
      <div className="App">
        <p>Hello {this.state.name}</p>
        <button onClick={() => {
          this.setState({ name: "John" })
        }}>Change name</button>
      </div>
    );
  }
}

export default App;
