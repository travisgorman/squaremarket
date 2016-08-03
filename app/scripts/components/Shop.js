import React from 'react';

const Shop = React.createClass({
  render: function(){
    return (
      <div>
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
        <ShopItem
          name={this.props.name}
          price={this.props.price}
          img={this.props.img} />
      </div>
    )
  }
});
export default ShopView;
