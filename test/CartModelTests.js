import { expect } from 'chai';
import cart from '../app/scripts/models/CartModel';

describe('cart model', function(){
  let self = cart.attributes;
  it('should exist', ()=> {
    expect(cart).to.exist;
  });
  it('should have an items property', ()=>{
    expect(self.items).to.exist;
  });
  it('should have a total property for the price', ()=> {
    expect(self.total).to.exist;
  });
  it('should be zero by default', ()=> {
    expect(self.total).to.eql(0);
  });
  it('should have an array for items to go', ()=> {
    expect(self.items).to.be.an('array');
  });
  it('should be empty by default', () => {
    expect(self.items).to.be.empty;
  });
  it('should have an addItem method', ()=> {
    expect(cart.addItem).to.exist;
  });
  it('should have a removeItem method', () => {
    expect(cart.removeItem).to.exist;
  });
  it('should have an updateTotal method', () => {
    expect(cart.updateTotal).to.exist;
  });
  it('should have an addTotal method', () => {
    expect(cart.addTotal).to.exist;
  });
});
