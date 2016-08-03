'use strict';

const BubbleSort = function(arr){
  let length = arr.length;
  let resultArr = arr.slice(0);

  for(var i=0; i< length-1; ++i){
    for(var j=0; j<length-i; ++j){

      if(resultArr[j] > resultArr[j+1]){
        let temp = resultArr[j];
        resultArr[j] = resultArr[j+1];
        resultArr[j+1] = temp;
      }

    }
  }

  return resultArr;
}

module.exports = {
  Sort : BubbleSort
}
