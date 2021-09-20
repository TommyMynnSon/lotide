const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it('returns [2] for [1, 2]', () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });

  it('returns [] for [\'hello\']', () => {
    assert.deepEqual(tail(['hello']), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});