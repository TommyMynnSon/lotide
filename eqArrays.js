const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected} 🎉`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  let sizeOfBothArrays = arrayOne.length;

  for (let i = 0; i < sizeOfBothArrays; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
};

// Test/driver code below.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);             // Test should fail.
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), false);   // Test should fail.