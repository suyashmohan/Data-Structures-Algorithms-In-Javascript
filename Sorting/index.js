'use strict';

const Bubble = require('./BubbleSort');
const Selection = require('./SelectionSort');
const Insertion = require('./InsertionSort');
const Quick = require('./QuickSort');

const createRandomArray = function(size, limit){
  let array = new Array();
  for(let i=0; i<size; ++i){
    array.push(Math.floor(Math.random()*limit));
  }
  return array;
}

let arr = createRandomArray(10, 100);
console.log('Unsorted Array                : ', arr);

let bubbleResult = Bubble.Sort(arr);
console.log('Bubble Sort    - Sorted Array : ', bubbleResult);

let selectionResult = Selection.Sort(arr);
console.log('Selection Sort - Sorted Array : ', selectionResult);

let insertionResult = Insertion.Sort(arr);
console.log('Insertion Sort - Sorted Array : ', insertionResult);

let quickResult = Quick.Sort(arr);
console.log('QuickSort      - Sorted Array : ', quickResult);
