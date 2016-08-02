'use strict';

const LinkedList = require('./LinkedList');

const printList = function(list){
  console.log('#### Printing List ####');
  list.traverse((value)=>{
    console.log(value);
  });
}

let list = new LinkedList();

list.insertAtBeg('Suyash');
printList(list);

list.insertAtBeg('Pulkit');
list.insertAtBeg('Nishchay');
list.insertAtBeg('Rajeshwar');
printList(list);

list.insertAfter('Rajeshwar', 'Madhav');
list.insertAfter('Madhav', 'Vishnu');
printList(list);
