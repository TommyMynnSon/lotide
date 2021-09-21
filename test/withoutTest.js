const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('returns [2] for without([1, 2, 3], [1, 3])', () => {
    assert.deepEqual(without([1, 2, 3], [1, 3]), [2]);
  });

  it('returns [\'1\', 2] for without([\'1\', 2, \'300\'], [\'300\'])', () => {
    assert.deepEqual(without(['1', 2, '300'], ['300']), ['1', 2]);
  });

  it('without([1, 2, 3], [3]) should not modify the passed [1, 2, 3] array', () => {
    let actual = [1, 2, 3];

    without(actual, [3]);

    assert.deepEqual(actual, [1, 2, 3]);
  });
});