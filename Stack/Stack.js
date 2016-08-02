'use strict';

//Stack Object - LIFO
const Stack = function(){
  this.list = []; //Array to hold items
  this.length = 0; //Count of items

  //Push item into Array On Top
  this.push = function(value){
    this.list.push(value); //Add item at end of array
    this.length += 1; //Increase length of List
    return this.list[this.length];
  }

  //Delete item from Top
  this.pop = function(){
    if(this.length > 0){ //Check for Underflow error
      let last = this.list[this.list.length -1]; //Get Last item
      delete this.list[this.length -1]; //Delete Last Item
      this.length -= 1; //Decrease the length
      return last;
    }
  }

  //traverse the list
  this.traverse = function(process){
    for(var i=this.length-1; i >= 0; i -= 1){
      process(this.list[i]);
    }
  }
}

module.exports = Stack;
