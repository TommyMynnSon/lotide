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

const copyArray = (anArray) => {
  let copy = [];

  for (let item of anArray) {
    copy.push(item);
  }

  return copy;
};

const without = (source, itemsToRemove) => {
  let wantedItems = copyArray(source);

  for (let w = 0; w < wantedItems.length; w++) {
    for (let r = 0; r < itemsToRemove.length; r++) {
      if (wantedItems[w] === itemsToRemove[r]) {
        wantedItems.splice(w, 1);
      }
    }
  }

  return wantedItems;
};

// Test/driver code below.

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