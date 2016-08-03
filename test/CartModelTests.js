import { expect } from 'chai';
import cart from '../app/scripts/models/CartModel';

describe('cart model', function(){
  it('should exist', ()=> {
    expect(cart).to.exist;
  });
  it('should have an items property', ()=>{
    expect(cart.attributes.items).to.exist;
  })
  it('should have a total property for the price', ()=> {
    expect(cart.attributes.total).to.exist;
  })
  it('should be zero by default', ()=> {
    expect(cart.attributes.total).to.eql(0);
  })
  it('should have an array for items to go', ()=> {
    expect(cart.attributes.items).to.be.an('array');
  })
  it('should be empty by default', () => {
    expect(cart.attributes.items).to.be.empty;
  })
});
