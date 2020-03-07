import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/review-cart.css';
import HeaderComponent from './HeaderComponent';
import CartItem from './CartItem';

class ReviewCart extends Component {
  constructor(props) {
    super(props);
    this.calculateSubtotal = this.calculateSubtotal.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  renderCartItems(cart) {
    return cart.map((item, index) => {
      return <CartItem item={item} key={index} handleQuantityChange={this.handleQuantityChange}></CartItem>;
    });
  }

  handleQuantityChange(item) {
    this.props.handleCartChange(item);
  }

  calculateSubtotal(cart) {
    return cart.map(item => item.unitPrice * item.quantity).reduce((acc, curr) => acc + curr, 0);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderComponent cart={this.props.cart} />
        <div className="reviewCartContainer">
          <div className="content">{this.renderCartItems(this.props.cart)}</div>
          <div className="subTotal">SUBTOTAL: {this.calculateSubtotal(this.props.cart)}</div>
          <Link to="/check-out">CHECK OUT</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewCart;
