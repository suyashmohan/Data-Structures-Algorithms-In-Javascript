'use strict';

const linearSearch = function(arr, val){
  let found = -1;
  for(var i=0; i<arr.length; ++i){
    if(arr[i] == val)
    {
      found = i;
      break;
    }
  }

  return found;
}

module.exports = {
  search: linearSearch
}
