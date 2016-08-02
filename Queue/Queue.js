'use strict';

//Queue - FIFO
const Queue = function(){
  this.list = []; //Array to hold items
  this.length = 0; //Length of list

  //Insert items At Rear
  this.insert = function(value){
    this.list.push(value); //Add item at End
    this.length += 1; //Increase the length
    return this.list[this.length];
  }

  //Delete Item from Front
  this.delete = function(){
    if(this.length > 0){ //Check for Underflow Error`
      let first = this.list[0]; //First Item
      this.list.splice(0, 1); //Remvoe First Item
      this.length -= 1; //Decrease the length
      return first;
    }
  }

  //Traverse the list
  this.traverse = function(process){
    for(var i=0; i < this.length; i += 1){
      process(this.list[i]);
    }
  }
}

module.exports = Queue;
