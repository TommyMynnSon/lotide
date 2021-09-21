const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it("return ['lighthouse!', 'labs!', 'boot!', 'camp!'] for map(['lighthouse', 'labs', 'boot', 'camp'], word => word += '!')", () => {
    assert.deepEqual(map(['lighthouse', 'labs', 'boot', 'camp'], word => word += '!'), ['lighthouse!', 'labs!', 'boot!', 'camp!']);
  });

  it("return [true, false, false, false] for map(['lighthouse', 'labs', 'boot', 'camp'], word => word === 'lighthouse')", () => {
    assert.deepEqual(map(['lighthouse', 'labs', 'boot', 'camp'], word => word === 'lighthouse'), [true, false, false, false]);
  });
});