const assertEqual = require('../assertEqual');
const tail = require('../tail');

let testArray1 = [1, 2, 3, 4, 5];
let testResult1 = tail(testArray1);

assertEqual(testResult1.length, 4);
assertEqual(testResult1[0], 2);
assertEqual(testResult1[1], 3);
assertEqual(testResult1[2], 4);
assertEqual(testResult1[3], 5);