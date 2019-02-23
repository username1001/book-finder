import React, { Component } from 'react';
import Button from './Button';
import BookDisplay from './BookDisplay';

const PATH_BASE = 'https://www.googleapis.com/books/v1/';
const PARAM_SEARCH = 'q=';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
    this.fetchQuery = this.fetchQuery.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    this.fetchQuery(query);
  }

  fetchQuery(query) {
    fetch(`${PATH_BASE}?${PARAM_SEARCH}${query}`)
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ items });
      })
      .catch(err => console.log(err));
  }

  onSearchSubmit(event) {
    const { query } = this.state;
    this.fetchQuery(query);
    event.preventDefault();
  }

  onSearchChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state.query;
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Search for books..."
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        <Button text="Search" onClick={() => this.fetchQuery(query)} />
      </div>
    );
  }
}
