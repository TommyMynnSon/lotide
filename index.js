const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');       // Contains assertEqual and eqArrays functions.

module.exports = {
  head,
  tail,
  middle,
  without,
  takeUntil,
  map,
  letterPositions,
  flatten,
  findKeyByValue,
  findKey,
  eqObjects,
  countOnly,
  countLetters,
  assertObjectsEqual,
  assertArraysEqual,
  assertEqual,
  eqArrays
};