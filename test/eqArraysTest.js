const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('should return true', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false', () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, '3']));
  });
});