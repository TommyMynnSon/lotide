const eqArrays = require('./eqArrays');

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays.eqArrays(arrayOne, arrayTwo)) {
    console.log(`🎉 Assertion Passed: ${arrayOne} === ${arrayTwo} 🎉`);
  } else {
    console.log(`❌ Assertion Failed: ${arrayOne} !== ${arrayTwo} ❌`);
  }
};

module.exports = assertArraysEqual;