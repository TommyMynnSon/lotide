const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected} 🎉`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const tail = (anArray) => {
  let tail = [];

  if (anArray.length === 0 || anArray.length === 1) {
    return tail;
  } else {
    for (let i = 1; i < anArray.length; i++) {
      tail.push(anArray[i]);
    }

    return tail;
  }
};

let testArray1 = [1, 2, 3, 4, 5];

let testResult1 = tail(testArray1);
assertEqual(testResult1.length, 4);
assertEqual(testResult1[0], 2);
assertEqual(testResult1[1], 3);
assertEqual(testResult1[2], 4);
assertEqual(testResult1[3], 5);