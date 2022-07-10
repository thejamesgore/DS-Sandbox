// With the unshift method we add a new node to the beginning of the array.
// This means we create a new node, point it to the next node, and then
// point the head of the linked list to our newly created node.

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

  unshift(value) {
    // First we create our new node
    const newNode = new Node(value)

    // Then we check to see if the linked list has any existing nodes.
    // If not we point head and tail to the newly created node.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // If there is an existing node/nodes then we point our newly created node to the current head of our linked list
      newNode.next = this.head

      // Then we move the head of the linked list to our newly created node
      this.head = newNode
    }
    // Then we increment the length of our linked list and return it
    this.length++
    return this
  }
}

let mylinkedList = new LinkedList(11)

console.log(mylinkedList)

mylinkedList.push(3)
console.log(mylinkedList)

mylinkedList.push(23)
console.log(mylinkedList)

mylinkedList.push(7)
console.log(mylinkedList)
