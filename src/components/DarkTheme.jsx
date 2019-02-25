import React, { Component } from 'react';
import Button from './Button';

class DarkTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.isActive = this.isActive.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.store = typeof localStorage === 'undefined' ? null : localStorage;
  }

  componentDidMount() {
    if (this.store) {
      this.setState({
        active: this.store.getItem('DarkTheme') || false
      });
    }
  }
  componentDidUpdate() {
    if (this.store) {
      this.store.setItem('DarkTheme', this.state.active);
    }
  }

  isActive = () => this.state.active;

  toggleMode() {
    this.setState({ active: !this.isActive() });
  }

  render() {
    this.css = `  
    body {background-color: #333;}
    footer {color: #fff;}
    footer a { color: }
    .books h2, p {color: white;}
    a {color: #239093;}`;
    return (
      <div>
        <Button
          aria-pressed={this.isActive()}
          onClick={this.toggleMode}
          className="dark-btn"
        >
          dark theme:{' '}
          <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
        </Button>
        <style media={this.isActive() ? 'screen' : 'none'}>{this.css}</style>
      </div>
    );
  }
}

export default DarkTheme;
