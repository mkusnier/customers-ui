import React, { Component } from 'react';
import './styles.css'

class DataRow extends Component {

  render() {
   const {label, value} = this.props;
    return (
      <dl>
        <dt className="data-label">{label}</dt>
        {value 
        ? (<dd className="data-value">{value}</dd>)
        : (<dd className="data-value">{this.props.children}</dd>)}
        
      </dl>
    );
  }
}

export default DataRow;
