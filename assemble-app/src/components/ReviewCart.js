import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/review-cart.css';
import ConnectedHeaderComponent from './HeaderComponent';
import ConnectedCartItem from './CartItem';

import { connect } from 'react-redux';
import { changeRoute } from '../actions/index';

const mapStateToProps = (state) => {
  return { products: state.products, currentRoute: state.currentRoute };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => dispatch(changeRoute(route)),
  };
};

class ReviewCart extends Component {
  renderCartItems = (cart) => {
    return cart.map((item, index) => {
      return <ConnectedCartItem item={item} key={index}></ConnectedCartItem>;
    });
  };

  componentDidMount() {
    this.props.changeRoute('/');
  }

  calculateSubtotal = (cart) => {
    return cart.map((item) => item.unitPrice * item.quantity).reduce((acc, curr) => acc + curr, 0);
  };

  render() {
    return (
      <React.Fragment>
        <ConnectedHeaderComponent />
        <div className="reviewCartContainer">
          <div className="content">{this.renderCartItems(this.props.products)}</div>
          <div className="subTotal">SUBTOTAL: {this.calculateSubtotal(this.props.products)}</div>
          <Link to="/check-out">CHECK OUT</Link>
        </div>
      </React.Fragment>
    );
  }
}
const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(ReviewCart);

export default ConnectedCart;
