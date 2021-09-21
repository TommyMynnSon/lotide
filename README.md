# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tommymynnson/lotide`

**Require it:**

`const _ = require('@tommymynnson/lotide/index');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Returns an object representing the tally of each letter found in a given string.

* `countOnly(array, object)`: Returns an object representing the tally of each name found in a given array. The object parameter determines whether a name from a given array is counted.

* `findKey(object, function)`: Returns the key name of a given object if the provided callback function iterates over the object and finds a key with a value specified in the callback function.

* `findKeyByValue(object, primitiveDataType)`: Returns the key name of a given object containing the value specified by primitiveDataType.

* `flatten(array)`: Transforms a multi-dimensional array (max. 2-dimensional) to a 1-dimensional array and returns it.

* `head(array)`: Returns the element at index 0 of a given array.

* `letterPositions(string)`: Returns an object representing the indices in which each character of a given string occurs at as an array.

* `map(array, function)`: Returns a new array populated with the results of calling a provided function on every element in the provided array.

* `middle(array)`: Returns the element(s) located in the middle of the given array.

* `tail(array)`: Returns the tail elements of the given array.

* `takeUntil(array, function)`: Returns all the elements of the given array before a stop value specified in the callback function.

* `without(array1, array2)`: Returns all the elements of array1 excluding the elements specified in array2.

* `eqArrays(array1, array2)`: Returns true if array1 and array2 are equal. Currently only supports arrays populated with primitive data types.

* `eqObjects(object1, object2)`: Returns true if object1 and object2 are equal. Currently only supports objects with properties of primitive data types or 1-dimensional arrays.