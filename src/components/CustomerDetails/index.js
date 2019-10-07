import React, { Component } from 'react';
import {getCustomer} from '../../actions'
import { Link } from "react-router-dom";
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import DataRow from '../DataRow'
import './styles.css'

class CustomerDetails extends Component {
  state = {
    customer: {},
    isLoaded: false
  };

  componentDidMount() {
    getCustomer(this.props.match.params.id).then(
      result => this.setState({ customer: result , isLoaded: true}),
      error => this.setState({isLoaded: true, error})
    )
  }

  render() {
    const { error, isLoaded, customer } = this.state;
    return (
      <div>
        <div className="page-header">
          <Link to="/"><i className="fas fa-chevron-left"></i></Link>{isLoaded ? <p>{customer.firstname} {customer.lastname}</p> : null}
        </div>
        {isLoaded 
        ? null
        : (<Loader />)}
        
        {error 
        ? (<ErrorMessage msg={error.message} />)
        : (<div>
          {isLoaded 
            ? (<div className="customer-details half-page">
              <DataRow label="Age" value={customer.age}/>
              <DataRow label="Email" value={customer.email}/>
              <DataRow label="Company" value={customer.company}/>
              <DataRow label="Account balance" value={customer.balance}/>
              <DataRow label="Address">
                {customer.address.line1} <br/> {customer.address.city}, {customer.address.state}, {customer.address.zip}
              </DataRow>
              <DataRow label="About" value={customer.about}/>
            </div>)
           : null}  
        </div>)}
      </div>
    );
  }
}

export default CustomerDetails;
