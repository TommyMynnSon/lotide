const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

console.log('> PRIMITIVE DATA TYPE TESTING <');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);       // Test should pass.
assertEqual(eqObjects(ab, abc), false);     // Test should pass.
assertEqual(eqObjects(ab, abc), true);      // Test should fail.
assertEqual(eqObjects(ab, ba), false);      // Test should fail.

console.log('> ARRAY TYPE TESTING <');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const tommy = { name: 'Tommy', favoriteFoods: ['pizza', 'fish & chips', 'fried chicken'] };
const robotTommy = { name: 'ROBOT_TOMMY', favoriteFoods: ['pizza', 'fish & chips', 'fried chicken'] };
const healthyTommy = { name: 'Tommy', favoriteFoods: ['pizza', 'fish & chips', 'kale salad'] };

assertEqual(eqObjects(cd, dc), false);                  // Test should fail.
assertEqual(eqObjects(cd, cd2), false);                 // Test should pass.
assertEqual(eqObjects(tommy, tommy), true);             // Test should pass.
assertEqual(eqObjects(tommy, healthyTommy), false);     // Test should pass.
assertEqual(eqObjects(tommy, robotTommy), true);        // Test should fail.