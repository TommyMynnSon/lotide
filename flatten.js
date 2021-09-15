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

const flatten = (anArray) => {
  let flattenedArray = [];

  for (let i = 0; i < anArray.length; i++) {
    if (Array.isArray(anArray[i])) {
      for (let element of anArray[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(anArray[i]);
    }
  }

  return flattenedArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);   // Test should pass.
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);       // Test should pass.
assertArraysEqual(flatten([1, [2, 3, 4, 5], 6]), [1, [2, 3, 4, 5], 6]);   // Test should fail.
assertArraysEqual(flatten([]), []);                                       // Test should pass.



