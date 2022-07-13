// The reverse method will switch the head and tail of the linked list and point each node the the previous

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

  reverse() {
    // We first start by switching the head and tail of the linked list
    // Using a temporary variable we assign it to the current head of the linked list
    let temp = this.head
    // we then assign the head to the tail of the linked list
    this.head = this.tail
    // we then assign the tail to the node temp was on which was originally the head.
    this.tail = temp

    // we create two new variables to track the location of each node as we will iterate over the linked list
    // Next is assigned to the node the tail of the linked list points to
    let next = temp.next
    // Prev is outside of our linked list and points to null
    let prev = null

    // we then iterate over the linked list
    for (let i = 0; i < this.length; i++) {
      // This points to the next node
      next = temp.next
      // our temp pointer points to the previous node, initially this will be null
      temp.next = prev
      // we assign the previous node to our current temporary node
      prev = temp
      // we assign our temporary node to our next node
      temp = next
    }
    return this
  }
}
