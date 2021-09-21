const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const result = countLetters('lighthouse in the house');
const expectedResult = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1
};

for (const key in result) {
  assertEqual(result[key], expectedResult[key]);
}

// https://www.tutorialspoint.com/how-to-compare-two-objects-in-javascript
if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
  console.log('Hard test passed');
} else {
  console.log('Hard test failed');
}