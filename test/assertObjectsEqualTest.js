const assertObjectsEqual = require('../assertObjectsEqual');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const tommy = { name: 'Tommy', favoriteFoods: ['pizza', 'fish & chips', 'fried chicken'] };
const healthyTommy = { name: 'Tommy', favoriteFoods: ['pizza', 'fish & chips', 'kale salad'] };

assertObjectsEqual(cd, cd);               // Test should pass.
assertObjectsEqual(cd, cd2);              // Test should fail.
assertObjectsEqual(cd, dc);               // Test should pass.
assertObjectsEqual(tommy, healthyTommy);  // Test should fail.
