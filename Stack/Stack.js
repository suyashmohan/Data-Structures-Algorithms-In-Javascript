'use strict';

const Stack = function(){
  this.list = [];
  this.length = 0;

  this.push = function(value){
    this.list.push(value);
    this.length += 1;
    return this.list[this.length];
  }

  this.pop = function(){
    if(this.length > 0){
      let last = this.list[this.list.length -1];
      delete this.list[this.length -1];
      this.length -= 1;
      return last;
    }
  }

  this.traverse = function(process){
    for(var i=this.length-1; i >= 0; i -= 1){
      process(this.list[i]);
    }
  }
}

module.exports = Stack;
