import React, { Component } from 'react';
import './App.css';
import C1 from './components/C1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">W</h1>
        </header>
        <Icon>star</Icon>
        <p className="App-intro">
          <code>PWA REACT APP</code>
        </p>
        <C1/>
      </div>
    );
  }
}

export default App;
