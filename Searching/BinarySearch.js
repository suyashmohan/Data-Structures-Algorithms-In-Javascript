'use strict';

const binarySearch = function(arr, val){
  let beg = 0;
  let end = arr.length - 1;
  let mid;

  let found = -1;

  while(beg < end){
    mid = Math.round((beg+end) / 2);

    if(val < arr[mid]){
      end = mid - 1;
    }

    if(val > arr[mid]){
      beg = mid + 1;
    }

    if(val == arr[mid]){
      found = mid;
      break;
    }
  }

  return found;
}

module.exports = {
  search: binarySearch
}
