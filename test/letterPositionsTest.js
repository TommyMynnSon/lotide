const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const result = letterPositions('lighthouse in the house');
const expectedResult = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

for (const letter in result) {
  assertArraysEqual(result[letter], expectedResult[letter]);
}