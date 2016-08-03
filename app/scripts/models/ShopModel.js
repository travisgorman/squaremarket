import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


const ShopModel = Backbone.Model.extend({
    products: [
                { name: 'Dabble', price: 12, img: '#DABB1E' },
                { name: 'Doodle', price: 6, img : '#D00D1E' },
                { name: 'Saddle', price: 30, img: '#5ADD1E' },
                { name: 'Obsess', price: 28, img: '#0B5E55' },
                { name: 'Floats', price: 63, img: '#F10A75' },
                { name: 'Dottle', price: 17, img: '#D0771E' },
                { name: 'Coddle', price: 0, img : '#C0DD1E' },
                { name: 'Feeble', price: 0, img : '#FEEB1E' }
              ]

});
let shop = new ShopModel();
export default shop;
