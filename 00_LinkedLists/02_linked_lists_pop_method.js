// The pop method removes the last node from the linked list
// For this to work it requires the pointer from the previous node to point to null and be assigned the tail
// This requires iterating through each node starting from the head
// As we are iterating linearly through our data structure this is an O(n) operation

// There are also two edgecases.
// What happens if there are no nodes and we use the pop method?
// What happens if there is only one node and we use the pop method?
// These will also need to be accounted for

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
  pop() {
    // first we test to see if the linked list is empty. If so return undefined
    if (!this.head) return undefined

    // If there are two or more items then we're going to use two assistant variables to help
    // us track current node position as we will need to iterate through
    let previous = this.head
    let current = this.head

    // we then use a while loop to iterate through each node
    while (current.next) {
      previous = current
      current = current.next
    }
    this.tail = previous
    this.tail.next = null
  }
}
