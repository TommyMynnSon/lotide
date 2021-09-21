const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;