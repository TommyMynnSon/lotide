const eqArrays = require('./eqArrays');

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays.eqArrays(arrayOne, arrayTwo)) {
    // console.log(`🎉 Assertion Passed: ${arrayOne} === ${arrayTwo} 🎉`);
    return true;
  } else {
    // console.log(`❌ Assertion Failed: ${arrayOne} !== ${arrayTwo} ❌`);
    return false;
  }
};

module.exports = assertArraysEqual;