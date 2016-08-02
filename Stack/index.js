'use strict';

const Stack = require('./Stack');

const printList = function(list){
  console.log('#### Printing List ####');
  list.traverse((value) => {
    console.log(value);
  })
}

let list = new Stack();

list.push('Suyash');
list.push('Pulkit');
list.push('Nishchay');
list.push('Rajeshwar');
printList(list);

list.pop();
printList(list);

list.pop();
list.pop();
printList(list);
