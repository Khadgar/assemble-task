import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/check-out.css';
import ConnectedHeaderComponent from './HeaderComponent';

import { connect } from 'react-redux';
import { changeRoute, changeOrderStatus } from '../actions/index';

const mapStateToProps = (state) => {
  return { products: state.products, currentRoute: state.currentRoute };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => dispatch(changeRoute(route)),
    changeOrderStatus: (orderStatus) => dispatch(changeOrderStatus(orderStatus)),
  };
};

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleCheckOutSubmit = (userInfo) => {
    console.log(userInfo);
    this.props.changeOrderStatus('COMPLETED');
  };

  calculateSubtotal = (cart) => {
    return cart.map((item) => item.unitPrice * item.quantity).reduce((acc, curr) => acc + curr, 0);
  };

  componentDidMount() {
    this.props.changeRoute('/check-out');
  }

  render() {
    return (
      <React.Fragment>
        <ConnectedHeaderComponent />
        <div className="checkoutContainer">
          <div className="paymentInformationContainer">
            <h2>Payment Information</h2>
            <label htmlFor="nameOnCard">Name on Card:</label>
            <input
              id="nameOnCard"
              name="nameOnCard"
              value={this.state.nameOnCard ? this.state.nameOnCard : ''}
              placeholder="Name on Card"
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="totalPriceContainer ">
            SUBTOTAL: {this.calculateSubtotal(this.props.products)}
          </div>

          <div className="navigation">
            <Link to="/">CONTINUE SHOPPING</Link>
            <Link
              to="/order-complete"
              onClick={() => {
                this.handleCheckOutSubmit({ userData: this.state, cart: this.props.products });
              }}
            >
              PLACE ORDER
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const ConnectedCheckOut = connect(mapStateToProps, mapDispatchToProps)(CheckOut);

export default ConnectedCheckOut;
