import React from 'react';

const CartItemView = React.createClass({
  // getInitialState: function(){},
  removeItem: function(){
    // remove this from your cart.items
  },
  render: function(){
    return (
      <div>
        <div className="cartImage">{this.props.img}</div>
        <div className="cartRow">
          <div className="cartItemName">{this.props.name}</div>
          <div className="cartItemPrice">{this.props.price}</div>
        </div>
      </div>
    )
  }
});
export default CartItemView;
