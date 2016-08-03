'use strict';

const Bubble = require('./BubbleSort');
const Selection = require('./SelectionSort');
const Insertion = require('./InsertionSort');

let arr = [56, 12, 36, 78, 92, 25, 87, 43];
console.log('Array : ', arr);

let bubbleResult = Bubble.Sort(arr);
console.log('Bubble Sorted Array : ', bubbleResult);

let selectionResult = Selection.Sort(arr);
console.log('Selection Sorted Array : ', selectionResult);

let insertionResult = Insertion.Sort(arr);
console.log('Insertion Sorted Array : ', insertionResult);
