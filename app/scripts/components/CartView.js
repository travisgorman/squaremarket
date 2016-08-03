import React from 'react';

const CartView = React.createClass({
  // getInitialState: function(){},
  findSum: function(){
    // return the sum of all items currently in your cart
  },
  addItem: function(){
    // adds this.store.item to your cart.items
  },
  render: function(){
    return (
      <div className="cartContainer">
        <div className="cartContent">
          <h4>Your SquareCart</h4>
          <ul> </ul>
          <div>
            <h5>Your Total Price</h5>
            <h5></h5>
          </div>
        </div>
      </div>
    )
  }
});
export default CartView;
