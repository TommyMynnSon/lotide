const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ['lighthouse', 'labs', 'boot', 'camp'];
assertArraysEqual(map(words, word => word += '!'), ['lighthouse!', 'labs!', 'boot!', 'camp!']);
assertArraysEqual(map(words, word => word === 'lighthouse'), [true, false, false, false]);
assertArraysEqual(map(words, word => word.length), [10, 4, 4, 4]);