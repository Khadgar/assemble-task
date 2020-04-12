import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.css';

import NoMatch from './components/NoMatch';

import ConnectedCart from './components/ReviewCart';
import CheckOut from './components/CheckOut';
import OrderComplete from './components/OrderComplete';

import { connect } from 'react-redux';
import { getData } from './actions/index';

const mapStateToProps = (state) => {
  return { products: state.products };
};

class App extends Component {

  componentDidMount() {
    this.props.getData([
      { sku: 38094374, unitPrice: 24.0, name: 'Red Shirt', quantity: 2 },
      { sku: 38094375, unitPrice: 24.0, name: 'Blue Shirt', quantity: 1 },
      { sku: 38094321, unitPrice: 12.0, name: 'Blue socks', quantity: 4 },
    ]);
  }

  render() {
    return (
      <React.Fragment>
        <div className="mainContainer">
          <Switch>
            <Route path="/" exact render={() => <ConnectedCart />} />
            <Route path="/check-out" render={() => <CheckOut />} />
            <Route path="/order-complete" render={() => <OrderComplete />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
const ConnectedApp = connect(mapStateToProps, { getData })(App);
export default ConnectedApp;
