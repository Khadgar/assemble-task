import React, { Component } from 'react';
import '../styles/header-component.css';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { products: state.products };
};

class HeaderComponent extends Component {
  render() {
    return (
      <div className="headerComponentContainer">
        <div className="title">Assemble Store</div>
        <div className="cartIcon">
          <div className="cartSize">
            {this.props.products.reduce((curr, acc) => curr + acc.quantity, 0)}
          </div>
        </div>
      </div>
    );
  }
}

const ConnectedHeaderComponent = connect(mapStateToProps, null)(HeaderComponent);

export default ConnectedHeaderComponent;
