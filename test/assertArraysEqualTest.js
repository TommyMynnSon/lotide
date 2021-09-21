const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
  it('should return true', () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it('should return false', () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [1, 2, '3']));
  });
});