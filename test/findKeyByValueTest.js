const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it('should return \'drama\'', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});