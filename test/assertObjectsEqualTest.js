const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe('#assertObjectsEqual', () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it('should return true', () => {
    assert.isTrue(assertObjectsEqual(cd, dc));
  });

  it('should return false', () => {
    assert.isFalse(assertObjectsEqual(cd, cd2));
  });
});