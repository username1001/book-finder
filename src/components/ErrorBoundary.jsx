import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ marginTop: '50px' }}>
          Something went wrong. Please try again.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
