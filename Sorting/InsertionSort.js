'use strict';

const InsertionSort = function(arr){
  let i,j, tmp;
  let resultArr = arr.slice(0);

  for(i=1; i<resultArr.length; ++i){
    j = i;
    tmp = resultArr[i];

    while(j > 0 && resultArr[j-1] > tmp){
      resultArr[j] = resultArr[j-1];
      j--;
    }

    resultArr[j] = tmp;
  }

  return resultArr;
}

module.exports = {
  Sort: InsertionSort
}
