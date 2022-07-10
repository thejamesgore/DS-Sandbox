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
    let temp = this.head

    // we then use a while loop to iterate through each node
    // while temp.next is true i.e. while there is a node to point to run the contents of the loop
    while (temp.next) {
      // This will move previous to temp. As the loop only runs while there is a new node to point to
      // previous will equal the second to last node
      previous = temp
      // This will move temp to the next node
      temp = temp.next
    }
    // Now we point the tail of the linked list to the second to last node
    this.tail = previous
    // we then point the tail of the node to null ending the linked list
    this.tail.next = null
    // we then reduce the length of the linked list by one
    this.length--

    // If there is only one node
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }
}
