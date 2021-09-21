const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");             // Test should pass.
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);     // Test should pass.
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");  // Test should pass.
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sciFi");   // Test should fail.
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");   // Test should fail.