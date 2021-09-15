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

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🎉 Assertion Passed: ${arrayOne} === ${arrayTwo} 🎉`);
  } else {
    console.log(`❌ Assertion Failed: ${arrayOne} !== ${arrayTwo} ❌`);
  }
};

// Test/driver code below.
assertArraysEqual([1, 2, 3], [1, 2, 3]);              // Test should pass.
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);           // Test should fail.
assertArraysEqual([1, 2, 3], [1, 2, '3']);            // Test should fail.
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);  // Test should pass.