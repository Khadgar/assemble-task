import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.css';

import NoMatch from './components/NoMatch';

import ReviewCart from './components/ReviewCart';
import CheckOut from './components/CheckOut';
import OrderComplete from './components/OrderComplete';

class App extends Component {
  constructor(props) {
    super(props);
    const cart = [
      { sku: 38094374, unitPrice: 24.0, name: 'Red Shirt', quantity: 2 },
      { sku: 38094375, unitPrice: 24.0, name: 'Blue Shirt', quantity: 1 },
      { sku: 38094321, unitPrice: 12.0, name: 'Blue socks', quantity: 4 },
    ];
    this.state = { cart, checkoutDetails: null };
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onCheckOutSubmit = this.onCheckOutSubmit.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  onQuantityChange(changedItem) {
    this.state.cart.find(el => el.sku === changedItem.sku).quantity = changedItem.newQuantity;
    this.setState({
      cart: this.state.cart,
    });
  }

  onCheckOutSubmit(orderInfo) {
    console.log('ORDER PLACED:', orderInfo);
    this.setState({ checkoutDetails: orderInfo });
  }

  clearCart() {
    this.setState({ cart: this.state.cart.map(item => ({ ...item, quantity: 0 })) });
  }

  render() {
    return (
      <React.Fragment>
        <div className="mainContainer">
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <ReviewCart
                  {...props}
                  cart={this.state.cart}
                  handleCartChange={this.onQuantityChange}
                />
              )}
            />
            <Route
              path="/check-out"
              render={props => (
                <CheckOut
                  {...props}
                  cart={this.state.cart}
                  handleCheckOut={this.onCheckOutSubmit}
                  handleClearCart={this.clearCart}
                />
              )}
            />
            <Route
              path="/order-complete"
              render={props => (
                <OrderComplete
                  {...props}
                  cart={this.state.cart}
                  orderInfo={this.state.checkoutDetails}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
