import React, { Component } from 'react';
import Button from './Button';
import BookDisplay from './display/BookDisplay';
import ErrorBoundary from './ErrorBoundary';

const PATH_BASE = 'https://www.googleapis.com/books/v1/volumes';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
    this.fetchQuery = this.fetchQuery.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  fetchQuery() {
    const { query } = this.state;
    fetch(`${PATH_BASE}?q=${query}`)
      .then(response => response.json())
      .then(json => {
        if (!query) {
          alert('Please enter a search term.');
          return;
        }
        let { items } = json;
        this.setState({ items });
        console.log(items);
      });
  }

  onSearchChange(event) {
    this.setState({ query: event.target.value.trim() });
  }

  render() {
    const { query } = this.state.query;
    const { items } = this.state.items;
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Seach by author, title, or ISBN"
          onChange={this.onSearchChange}
        />
        <Button onClick={() => this.fetchQuery(query)}>Search</Button>
        <ErrorBoundary>
          <BookDisplay items={this.state.items} />
        </ErrorBoundary>
      </div>
    );
  }
}
