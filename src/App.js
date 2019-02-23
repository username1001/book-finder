import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>BOOK FINDER</h1>
          <p>Find all of your favorite books!</p>
        </header>
        <div className="search-area">
          <Search />
        </div>
        <div className="book-display">
          <p>
            There's nothing here yet! Try searching for a book.{' '}
            <span class="magnify-icon">&#9906;</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
