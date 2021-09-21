const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  describe('Primitive data type properties', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };

    it('should return true', () => {
      assert.isTrue(eqObjects(ab, ba));
    });

    it('should return false', () => {
      assert.isFalse(eqObjects(ab, abc));
    });
  });

  describe('Array properties', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const cd2 = { c: "1", d: ["2", 3, 4] };

    it('should return true', () => {
      assert.isTrue(eqObjects(cd, dc));
    });

    it('should return false', () => {
      assert.isFalse(eqObjects(cd, cd2));
    });
  });
});