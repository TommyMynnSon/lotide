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

const words = ['lighthouse', 'labs', 'boot', 'camp'];

const map = (array, callback) => {
  const results = [];

  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

assertArraysEqual(map(words, word => word += '!'), ['lighthouse!', 'labs!', 'boot!', 'camp!']);
assertArraysEqual(map(words, word => word === 'lighthouse'), [true, false, false, false]);
assertArraysEqual(map(words, word => word.length), [10, 4, 4, 4]);