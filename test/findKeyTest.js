const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(testObject, x => x.stars === 2), 'noma');       // Test should pass.
assertEqual(findKey(testObject, x => x.stars === 3), 'Akaleri');    // Test should pass.
assertEqual(findKey(testObject, x => x.stars === 1), 'Blue Hill');  // Test should pass.
assertEqual(findKey(testObject, x => x.stars === 2), 'Ora');        // Test should fail.