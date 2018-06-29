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
        <p className="App-intro">
          <code>PWA React PoC</code>
        </p>
        <C1/>
      </div>
    );
  }
}

export default App;
