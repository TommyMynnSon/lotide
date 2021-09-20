const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");   // non-identical strings
assertEqual("Tommy", "Tommy");                // identical strings
assertEqual(10, (10 + 1));                    // non-identical numbers
assertEqual(1, 1);                            // identical numbers