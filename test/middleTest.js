const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log('Assertions below should pass:');
assertArraysEqual(middle([1, 2, 3]), [2]);          // Assertion should pass.
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);    // Assertion should pass.
assertArraysEqual(middle([]), []);                  // Assertion should pass.
assertArraysEqual(middle([1]), []);                 // Assertion should pass.
assertArraysEqual(middle([1, 2]), []);              // Assertion should pass.

console.log('\nAssertions below should fail:');
assertArraysEqual(middle([1, 2, 3, 4]), [3]);       // Assertion should fail.
assertArraysEqual(middle([1, 2, 3, 4]), [2]);       // Assertion should fail.
assertArraysEqual(middle([1]), [1]);                // Assertion should fail.