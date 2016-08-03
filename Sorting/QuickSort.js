'use strict';

const QuickSort = function(arr){
  let resultArr = arr.slice(0);
  sort(resultArr, 0, resultArr.length-1);
  return resultArr;
}

const sort = function(arr, low, high){
  if(low < high){
    let p = partition(arr, low, high);
    sort(arr, low, p);
    sort(arr, p+1, high);
  }
}

const partition = function(arr, low, high){
  let i = low - 1;
  let j = high + 1;
  let pivot = arr[low];

  while(true){
    do{
      i++;
    }while(arr[i] < pivot);

    do{
      j--;
    }while(arr[j] > pivot);

    if(i >= j)
      return j;

    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

module.exports = {
  Sort: QuickSort
}
