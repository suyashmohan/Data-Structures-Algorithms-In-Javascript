'use strict';

//Node structure to hold info and next pointer
const Node = function(value){
  this.value = value; // Value of the Node
  this.next = null; // Pointer to Next
}

const LinkedList = function(){
  this.start = null; //Starting Node

  //Insert a Node in Beginning
  this.insertAtBeg = function(value){
    //Check if list is empty
    if(this.start == null){
      //then create the first node
      this.start = new Node(value);
    }else{
      //Else create a node and set it's next pointer to Starting
      let node = new Node(value);
      node.next = this.start;
      this.start = node;
    }
  }

  //Insert a Node after a certain Value
  this.insertAfter = function(info, value){
    let ptr = this.start;
    let loc = null;

    //Travere the list
    while(ptr!= null){
      //If node with info is found save it
      if(ptr.value == info)
        loc = ptr;
      ptr = ptr.next;
    }

    //If Node with Info is Found
    if(loc != null){
      //Then create a new node and add it

      let node = new Node(value); //New Node
      let prev = loc.next; //Temporarily save the next pointer of searched node
      node.next = prev; //Update new Node's next with searched node's next
      loc.next = node; //Update searched node's next to new node
    }
  }

  //Traverse the list
  this.traverse = function(process){
    let ptr = this.start;
    //Loop till we haven't reached end
    while(ptr!= null){
      //Callback to process the value
      process(ptr.value);
      //Update pointer to next
      ptr = ptr.next;
    }
  }
}

module.exports = LinkedList;
