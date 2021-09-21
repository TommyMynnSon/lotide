const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);   // Test should pass.
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);       // Test should pass.
assertArraysEqual(flatten([1, [2, 3, 4, 5], 6]), [1, [2, 3, 4, 5], 6]);   // Test should fail.
assertArraysEqual(flatten([]), []);                                       // Test should pass.