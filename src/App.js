import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <h1>BOOK FINDER</h1>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
