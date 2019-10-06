import React, { Component } from 'react';
import './App.css';
import {
  HashRouter  as Router,
  Route
} from 'react-router-dom';

import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Route exact path="/" component={CustomerList} />
          <Route path="/customer/:id" component={CustomerDetails} />
        </div>
      </Router>

    );
  }
}

export default App