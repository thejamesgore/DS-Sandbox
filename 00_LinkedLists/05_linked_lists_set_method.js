// The set method changes the value of a node in a linked list
// The set method operates simiarly to the get method by finding a node in a linked list via the index
// The difference here is it also changes the value of the node before returning the node

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
  set()
}
