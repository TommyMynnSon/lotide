const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
  it('should return true', () => {
    assert.isTrue(assertEqual('Tommy', 'Tommy'));
  });

  it('should return false', () => {
    assert.isFalse(assertEqual(10, (10 + 1)));
  });
});
