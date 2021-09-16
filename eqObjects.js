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

// Determines if the number of keys of both objects match.
const eqSize = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  return true;
};

// Determines if the keys of both objects match.
const eqKey = (object1, object2) => {
  const keysToMatch = Object.keys(object1).length;
  let currentMatchingKeys = 0;
  
  for (const object1Key in object1) {
    for (const object2Key in object2) {
      if (object1Key === object2Key) {
        currentMatchingKeys++;
      }
    }
  }
  
  if (currentMatchingKeys === keysToMatch) {
    return true;
  }
  
  return false;
};

// Determines if the values of the same key of both objects match.
const eqValue = (object1, object2) => {
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }

    if (!Array.isArray(object1[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  if (!eqSize(object1, object2)) {
    return false;
  }

  if (!eqKey(object1, object2)) {
    return false;
  }

  if (!eqValue(object1, object2)) {
    return false;
  }

  return true;
};

// Test/driver code.
console.log('> PRIMITIVE DATA TYPE TESTING <');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);       // Test should pass.
assertEqual(eqObjects(ab, abc), false);     // Test should pass.
assertEqual(eqObjects(ab, abc), true);      // Test should fail.
assertEqual(eqObjects(ab, ba), false);      // Test should fail.

console.log('> ARRAY TYPE TESTING <');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const tommy = { name: 'Tommy', favoriteFoods: ['pizza', 'fish & chips', 'fried chicken']};
const robotTommy = { name: 'ROBOT_TOMMY', favoriteFoods: ['pizza', 'fish & chips', 'fried chicken']};
const healthyTommy = { name: 'Tommy', favoriteFoods: ['pizza', 'fish & chips', 'kale salad']};

assertEqual(eqObjects(cd, dc), false);                  // Test should fail.
assertEqual(eqObjects(cd, cd2), false);                 // Test should pass.
assertEqual(eqObjects(tommy, tommy), true);             // Test should pass.
assertEqual(eqObjects(tommy, healthyTommy), false);     // Test should pass.
assertEqual(eqObjects(tommy, robotTommy), true);        // Test should fail.