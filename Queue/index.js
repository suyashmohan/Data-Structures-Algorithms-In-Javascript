'use strict';

const Queue = require('./Queue');

const printList = function(list){
  console.log('#### Printing List ####');
  list.traverse((value) => {
    console.log(value);
  })
}

let list = new Queue();

list.insert('Suyash');
list.insert('Pulkit');
list.insert('Nishchay');
list.insert('Rajeshwar');
printList(list);

list.delete();
printList(list);

list.delete();
list.delete();
printList(list);
