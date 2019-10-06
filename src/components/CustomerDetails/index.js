import React, { Component } from 'react';
import {getCustomer} from '../../actions'
import { Link } from "react-router-dom";
import './styles.css'

class CustomerDetails extends Component {
  state = {
    customer: {}
  };

  componentDidMount() {
    getCustomer(this.props.match.params.id).then(customer => 
      this.setState({ customer: customer })
    )
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <Link to="/">&lt;</Link><p>{this.state.customer.firstname} {this.state.customer.lastname}</p>
        </div>
      
        <div className="customer-details">
            {/* <p>ID: {this.state.customer.id}</p> */}
            <p>First name: {this.state.customer.firstname}</p>
            <p>Last name: {this.state.customer.lastname}</p>
            {this.state.customer.address 
            ? (<div><p>Address: </p>
              <p>Street: {this.state.customer.address.line1}</p>
              <p>City: {this.state.customer.address.city}</p>
              <p>Steate: {this.state.customer.address.state}</p>
              <p>Zip: {this.state.customer.address.zip}</p>
              </div>)
          : null}
            
        </div>
      </div>
    );
  }
}

export default CustomerDetails;
