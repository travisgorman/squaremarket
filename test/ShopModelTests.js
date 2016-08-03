import { expect } from 'chai';
import shop from '../app/scripts/models/ShopModel';

describe('shop model', function(){
  it('should exist', () => {
    expect(shop).to.exist;
  });
});
