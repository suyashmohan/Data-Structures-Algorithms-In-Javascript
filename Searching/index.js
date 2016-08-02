'use strict';

const linear = require('./LinearSearch');
const binary = require('./BinarySearch');

var arr1 = [62, 45, 89, 23, 39, 13];
var arr2 = [13, 23, 39, 45, 62, 89];

console.log('Array 1 ', arr1);
let result1 = linear.search(arr1, 45);
let result2 = linear.search(arr1, 57);
console.log('Result for 45 : ', result1);
console.log('Result for 57 : ', result2);

console.log('Array 2 ', arr2);
let result3 = binary.search(arr2, 45);
let result4 = binary.search(arr2, 57);
console.log('Result for 45 : ', result3);
console.log('Result for 57 : ', result4);
