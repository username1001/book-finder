import React, { Component } from 'react';
import Button from './Button';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  isEmpty() {
    if (!this.state) {
      alert('Please enter a query.');
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search for books..." />
        <Button>Search</Button>
      </div>
    );
  }
}

export default Search;
