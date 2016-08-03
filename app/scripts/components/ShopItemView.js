import React from 'react';

const ShopItemView = React.createClass({
  // getInitialState: function(){},
  removeItem: function(){
    // remove this from your cart.items
  },
  render: function(){
    return (
      <div>
        <div className="shopImage">{this.props.img}</div>
        <div className="shopRow">
          <div className="shopItemName">{this.props.name}</div>
          <div className="shopItemPrice">{this.props.price}</div>
        </div>
      </div>
    )
  }
});
export default ShopItemView;
