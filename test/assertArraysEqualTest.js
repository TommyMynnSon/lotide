const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);              // Test should pass.
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);           // Test should fail.
assertArraysEqual([1, 2, 3], [1, 2, '3']);            // Test should fail.
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);  // Test should pass.