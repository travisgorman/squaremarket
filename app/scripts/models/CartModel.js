import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const CartModel = Backbone.Model.extend({
  defaults: {
      items: [],
      total: 0
    },
  Item: function (name, price, img){
    this.name = name;
    this.price = price;
    this.img = img;
  },
  updateTotal: function(){
    attributes.total = attributes.items.addTotal();
  },
  addItem: function ( name, price, img ) {
    let item = new Item( name, price, img );
    attributes.items.push( item );
    updateTotal();
  },
  addTotal: function ( items, prop ) {
    if ( items === null ){
      return 0;
    }
    return items.reduce( ( a, b ) => {
      return b[ price ] === null ? a : a + b[ prop ];
    }, 0 );
  },
  removeItem: function( item ){
    this.splice( this.indexOf( item ), 1);
    updateTotal();
  }
});

let cartModel = new CartModel();

export default cartModel;
