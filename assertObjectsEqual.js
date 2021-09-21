const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual1, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual1, expected)) {
    console.log(`🎉 Assertion Passed: ${inspect(actual1)} === ${inspect(expected)} 🎉`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual1)} === ${inspect(expected)} ❌`);
  }
};

module.exports = assertObjectsEqual;