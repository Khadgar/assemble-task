import React, { Component } from 'react';
import '../styles/header-component.css';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="headerComponentContainer">
        <div className="title">Assemble Store</div>
        <div className="cartIcon">
          <div className="cartSize">
            {this.props.cart.reduce((curr, acc) => curr + acc.quantity, 0)}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
