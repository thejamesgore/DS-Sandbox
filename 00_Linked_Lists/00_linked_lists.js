// We create a node class as many methods we use will be creating new nodes
class Node {
  constructor(value) {
    // we pass a value to our constructor and this will be the value of the node
    this.value = value
    // we have a pointer for each node which presently points to null
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
