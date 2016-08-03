'use strict';

const SelectionSort = function(arr){
  let length = arr.length;
  let resultArr = arr.slice(0);

  for(let i=0; i<length; ++i){
    let min = i;
    for(let j=i+1; j<length; ++j){
      if(resultArr[j] < resultArr[min]){
        min = j;
      }
    }

    let temp = resultArr[min];
    resultArr[min] = resultArr[i];
    resultArr[i] = temp;
  }

  return resultArr;
}

module.exports = {
  Sort : SelectionSort
}
