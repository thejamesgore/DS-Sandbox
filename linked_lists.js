// making a linked list can start with make a class to create as many linked lists from in the future

// we create a node class as many methods we use will be creating new nodes
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Creating the linked list class. We create a new node with the constructor and Node class.
// The newNode has the head pointing to the newNode, tail pointing to the head as there is only one node.
// We also monitor the length of the linked list
class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}

// We initialise a new linked list passing the a value of 4
let mylinkedList = new LinkedList(4)

// We then print our new linked list to the console.
console.log(mylinkedList)
