import React, { Component } from 'react';
import '../styles/order-complete.css';
import ConnectedHeaderComponent from './HeaderComponent';
import { Link } from 'react-router-dom';

class OrderComplete extends Component {
  render() {
    return (
      <React.Fragment>
        <ConnectedHeaderComponent />
        <div className="orderCompleteContainer">
          <h1>Order Completed</h1>
          <Link to="/">HOME</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderComplete;
