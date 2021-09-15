const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  let sizeOfBothArrays = arrayOne.length;

  for (let i = 0; i < sizeOfBothArrays; i++) {
    if (arrayOne[i] !== arrayTwo[i])  {
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

// Determines whether the array argument is of odd length or not.
const isOdd = (array) => {
  if (array.length % 2 !== 0) {
    return true;
  }

  return false;
};

// Returns the middle index of the array argument.
// Note: middle index of an even length array has right-side emphasis.
const getMiddleIndex = (array) => {
  return Math.floor(array.length / 2);
};

// Determines whether the array argument has a middle.
const isValid = (array) => {
  if (array.length < 3) {
    return false;
  }

  return true;
};

// Returns the element(s) as an array located in the middle of the array argument.
const middle = (array) => {
  if (!isValid(array)) {
    return [];
  }

  if (isOdd(array)) {
    const middle = [];

    middle.push(array[getMiddleIndex(array)]);

    return middle;
  }

  const middle = [];
  const middleIndex = getMiddleIndex(array);

  middle.push(array[middleIndex - 1], array[middleIndex]);
  
  return middle;
};

// Test/driver code.
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