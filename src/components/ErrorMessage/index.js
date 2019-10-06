import React, { Component } from 'react';

import './styles.css'

class ErrorMessage extends Component {
  render() {
    return (
      <div className="error-message">
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default ErrorMessage
