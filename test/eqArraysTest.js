const test = require('../eqArrays');

test.assertEqual(test.eqArrays([1, 2, 3], [1, 2, 3]), true);
test.assertEqual(test.eqArrays([1, 2, 3], [1, 2, '3']), false);
test.assertEqual(test.eqArrays([1, 2, 3], [1, 2, 3, 4]), true);             // Test should fail.
test.assertEqual(test.eqArrays(['1', '2', '3'], ['1', '2', '3']), false);   // Test should fail.