// We're adding the push method to our linked list.
// Push will add a new node onto the end of our linked list

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
  // beginning of our push method
  push(value) {
    // we create a new node as we're adding a node onto the end of our existing linked list
    const newNode = new Node(value)

    // then we check to see if there is NOT an existing node.
    // If not we point the head and tail of the linked list to this new node
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      //   If there is an existing node then we point the tail to the new node we're creating.
      this.tail.next = newNode
      this.tail = newNode
    }
    // we then increase the length of the linked list and return the entire linked list
    this.length++
    return this
  }
}

// here we create a new linked list with a node of the value 7
let myLinkedList = new LinkedList(7)

// then we use our new push method to add a new node to the end of our linked list with the value of 4
myLinkedList.push(4)

// then we print our linked list to the console
console.log(myLinkedList)
