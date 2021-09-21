const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// 1) Testing for correct return value of without function.
console.log('---------------------- Testing for correct return value of without function. ----------------------');
assertArraysEqual(without([1, 2, 3], [1, 3]), [2]);                   // Test should pass.
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);                 // Test should pass.
assertArraysEqual(without(['1', 2, '300'], ['300']), ['1', 2]);       // Test should pass.
assertArraysEqual(without(['1', 2, '300'], [2, '300']), ['1', 2]);    // Test should fail.
assertArraysEqual(without(['1', 2, '300'], [1]), ['1', 2, '300']);    // Test should pass.

// 2) Testing if without function unintentionally modifies passed arrays.
console.log('---------------------- Testing if without function unintentionally modifies passed arrays. ----------------------');
let testSource = [1, 2, 3];
let testItemsToRemove = ['2', 3];

assertArraysEqual(without(testSource, testItemsToRemove), [1, 2]);    // Test should pass.
assertArraysEqual(testSource, [1, 2, 3]);                             // Test should pass.
assertArraysEqual(testItemsToRemove, ['2', 3]);                       // Test should pass.
assertArraysEqual(testSource, [1, 2]);                                // Test should fail.