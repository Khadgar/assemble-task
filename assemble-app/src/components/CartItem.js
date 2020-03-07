import React, { Component } from 'react';
import '../styles/cart-item.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(operation) {
    if (operation === 'minus') {
      this.props.handleQuantityChange({
        sku: this.props.item.sku,
        newQuantity: this.props.item.quantity > 0 ? this.props.item.quantity - 1 : 0,
      });
    } else {
      this.props.handleQuantityChange({
        sku: this.props.item.sku,
        newQuantity: this.props.item.quantity + 1,
      });
    }
  }

  render() {
    const price = this.props.item.quantity * this.props.item.unitPrice;
    return (
      <div className="cartItemContainer">
        <div className={'picture pic-' + this.props.item.sku}></div>
        <div className="desc">
          <div className="name">{this.props.item.name}</div>
          <div className="sku">SKU# {this.props.item.sku}</div>
        </div>
        <div className="quantity">
          <div className="stepper">
            <div
              className="minus"
              onClick={() => {
                this.handleQuantityChange('minus');
              }}
            ></div>
            <div className="value">{this.props.item.quantity}</div>
            <div
              className="plus"
              onClick={() => {
                this.handleQuantityChange('plus');
              }}
            ></div>
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
    );
  }
}

export default CartItem;
