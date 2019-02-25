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
    footer a { color: }`;
    return (
      <div>
        <button aria-pressed={this.isActive()} onClick={this.toggleMode}>
          dark theme:{' '}
          <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
        </button>
        <style media={this.isActive() ? 'screen' : 'none'}>{this.css}</style>
      </div>
    );
  }
}

export default DarkTheme;
