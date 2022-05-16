import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Neo',
      lastName: 'D. Truman'
    }
  }

  render() {
    return (
      <div className="App">
        <p>Hello {this.state.firstName} {this.state.lastName}</p>
        <button onClick={() => {
          this.setState({ lastName: "Truman" });
        }}>Change name</button>
      </div>
    );
  }
}

export default App;
