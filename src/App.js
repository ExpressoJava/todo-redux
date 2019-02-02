import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'}
      {id: 2, content: "play mario kart"}
    ]
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
