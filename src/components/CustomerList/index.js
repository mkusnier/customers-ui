import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {getCustomers} from '../../actions'
import ErrorMessage from '../ErrorMessage'
import Loader from '../Loader'

import './styles.css'

class CustomerList extends Component {
  state = {
    customers: [],
    isLoaded: false
  };

  componentDidMount() {
    getCustomers().then(
      result => this.setState({ customers: result , isLoaded: true}),
      error => this.setState({isLoaded: true, error})
    )
  }
  render() {
    const { error, isLoaded, customers } = this.state;
    return (
      <div>
        <div className="page-header">
          <p>Customers list</p>
        </div>
        {isLoaded 
        ? null
        : (<Loader />)}
        
        {error 
        ? (<ErrorMessage msg="Error occured while fetching customers" />)
        : (<div className="customer-list half-page">
        
          {
            customers.map((value, index) => {
              return <Link to={`/customer/${value.id}`} key={index}><p className="customer-entry">{value.firstname} {value.lastname}</p></Link>
            })
          }
        
        </div>)
      }
      </div>
     
    );
  }
}

export default CustomerList
