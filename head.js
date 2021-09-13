const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected} 🎉`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const head = (anArray) => {
  if (anArray.length === 0) {
    return undefined;
  } else {
    return anArray[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]), undefined);
assertEqual(head(['Solo']), 'Solo');
assertEqual(head([5]), (5 + 1));                              // should fail