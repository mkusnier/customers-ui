import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {getCustomers} from '../../actions'

import './styles.css'

class CustomerList extends Component {
  state = {
    customers: []
  };

  componentDidMount() {
    getCustomers().then(customerslist => 
      this.setState({ customers: customerslist })
    )
  }
  render() {

    return (
      <div>
        <div className="page-header">
          <p>Customers list</p>
        </div>
        <div className="customer-list">
      
        {
          this.state.customers.map((value, index) => {
          return <Link to={`/customer/${index}`} key={index}><p className="customer-entry">{value.firstname} {value.lastname}</p></Link>
        })
        }
      
        </div>
      </div>
    );
  }
}

export default CustomerList
