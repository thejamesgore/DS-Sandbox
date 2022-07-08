// making a linked list can start with make a class to create as many linked lists from in the future

// we create a node class as many methods we use will be creating new nodes
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}
