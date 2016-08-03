import React from 'react';

const Cart = React.createClass({
  render: function(){
    return (
      <div className="cartContainer">
        <div className="cartContent">
          <h4>Your SquareCart</h4>
          <ul> </ul>
          <div>
            <h5>Your Total Price</h5>
            <h5>{this.props.total}</h5>
          </div>
        </div>
      </div>
    )
  }
});
export default Cart;
