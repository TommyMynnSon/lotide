// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected} 🎉`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");   // non-identical strings
assertEqual("Tommy", "Tommy");                // identical strings
assertEqual(10, (10 + 1));                    // non-identical numbers
assertEqual(1, 1);                            // identical numbers
