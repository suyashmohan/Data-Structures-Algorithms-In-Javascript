'use strict';

const Queue = function(){
  this.list = [];
  this.length = 0;

  this.insert = function(value){
    this.list.push(value);
    this.length += 1;
    return this.list[this.length];
  }

  this.delete = function(){
    let first = this.list[0];
    this.list.splice(0, 1);
    this.length -= 1;
    return first;
  }

  this.traverse = function(process){
    for(var i=0; i < this.length; i += 1){
      process(this.list[i]);
    }
  }
}

module.exports = Queue;
