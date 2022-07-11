// With the shift method we are removing a node from start of the linked list.

// We need to consider what happens when we only have one item in the linked list.
// We also need to consider what happens if we have no items in our linked list

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

  shift() {
    // if there is not item in our linked list
    if (!this.head) return undefined
    // We use a temporary variable to keep track of the head of the first node of the linked list
    let temp = this.head
    // We move the head of the linked list to the next node
    this.head = this.head.next
    // we now have the first node of the linked list point to null detaching it from the linked list
    temp.next = null
    // we then decrement the length of the linked list
    this.length--
    // if there is only one node we point the tail to null
    if (this.length === 0) {
      this.tail = null
    }
    // we then return the temporary node
    return temp
  }
}
