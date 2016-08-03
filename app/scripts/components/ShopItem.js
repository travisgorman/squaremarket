import React from 'react';

const ShopItem = React.createClass({
  render: function(){
    return (
      <div>
        <div className="shopImage">{this.props.img}</div>
        <div className="shopRow">
          <div className="shopItemName">{this.props.name}</div>
          <div className="shopItemPrice">{this.props.price}</div>
          <input type="button" value="add to cart" onClick={addItem} />
        </div>
      </div>
    )
  }
});
export default ShopItem;
