import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/check-out.css';
import HeaderComponent from './HeaderComponent';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCheckOutSubmit = this.handleCheckOutSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleCheckOutSubmit(userInfo) {
    this.props.handleClearCart();
    this.props.handleCheckOut(userInfo);
  }

  calculateSubtotal(cart) {
    return cart.map(item => item.unitPrice * item.quantity).reduce((acc, curr) => acc + curr, 0);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderComponent cart={this.props.cart} />
        <div className="checkoutContainer">
          <div className="paymentInformationContainer">
            <h2>Payment Information</h2>
            <label htmlFor="nameOnCard">Name on Card:</label>
            <input
              id="nameOnCard"
              name="nameOnCard"
              value={this.state.nameOnCard ? this.state.nameOnCard : ''}
              placeholder="Name on Card"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              id="cardNumber"
              name="cardNumber"
              value={this.state.cardNumber ? this.state.cardNumber : ''}
              placeholder="Card Number"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="expiration">Expiration Date:</label>
            <input
              id="expiration"
              name="expiration"
              value={this.state.expiration ? this.state.expiration : ''}
              placeholder="Expiration Date"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="expiration">CVV:</label>
            <input
              id="cvv"
              name="cvv"
              value={this.state.cvv ? this.state.cvv : ''}
              placeholder="CVV"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div className="billingAddressContainer">
            <h2>Billing Address</h2>
            <label htmlFor="fullname">Name:</label>
            <input
              id="fullname"
              name="fullname"
              value={this.state.fullname ? this.state.fullname : ''}
              placeholder="Full Name"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              name="address"
              value={this.state.address ? this.state.address : ''}
              placeholder="Address"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="address2">Apt/suite/etc:</label>
            <input
              id="address2"
              name="address2"
              value={this.state.address2 ? this.state.address2 : ''}
              placeholder="Apt/suite/etc"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="city">City:</label>
            <input
              id="city"
              name="city"
              value={this.state.city ? this.state.city : ''}
              placeholder="City"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="country">Country:</label>
            <input
              id="country"
              name="country"
              value={this.state.country ? this.state.country : ''}
              placeholder="Country"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="state">State:</label>
            <input
              id="state"
              name="state"
              value={this.state.state ? this.state.state : ''}
              placeholder="State"
              onChange={e => this.handleInputChange(e)}
            />
            <label htmlFor="zip">ZIP Code:</label>
            <input
              id="zip"
              name="zip"
              value={this.state.zip ? this.state.zip : ''}
              placeholder="ZIP Code"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div className="totalPriceContainer ">
            SUBTOTAL: {this.calculateSubtotal(this.props.cart)}
          </div>

          <div className="navigation">
            <Link to="/">CONTINUE SHOPPING</Link>
            <Link
              to="/order-complete"
              onClick={() => {
                this.handleCheckOutSubmit({ userData: this.state, cart: this.props.cart });
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

export default CheckOut;
