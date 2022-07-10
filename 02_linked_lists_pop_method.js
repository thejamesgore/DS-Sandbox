class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node()
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}
