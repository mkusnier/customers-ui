import React, { Component } from 'react';

import './styles.css'

class Loader extends Component {
  render() {
    return (
      <div className="loader center">
        <i className="fas fa-spinner fa-spin" />
      </div>
    );
  }
}

export default Loader
