import React, { Component } from 'react';
import Search from './components/Search';
import Footer from './components/Footer';
import DarkTheme from './components/DarkTheme';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <i className="fa fa-bars" style={{ float: 'right' }} />
          <h1>BOOK FINDER</h1>
          <p>Find all of your favorite books!</p>
          {/* <DarkTheme /> */}
        </header>
        <div className="search-area">
          <Search />
        </div>
        <div className="book-display">{/* <Message /> */}</div>
        <Footer />
      </div>
    );
  }
}

const Message = () => (
  <p>There's nothing here yet! Try searching for a book.</p>
);

export default App;
