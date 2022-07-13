// The remove method takes an index and removes a node from that index.
// It does this by pointing the node at the previous index at the node at the next index

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

  get(index) {
    if (index < 0 || index >= this.legnth) return undefined
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  pop() {
    if (!this.head) return undefined
    let temp = this.head
    let pre = this.head
    while (temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  shift() {
    if (!this.head) return undefined
    let temp = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    temp.next = null
    return temp
  }

  remove(index) {
    // if there is only one node we use the shift method
    if (index === 0) return this.shift()
    // if we're removing the node from the end of the list we use the pop method
    if (index === this.length - 1) return this.pop()
    // if we try removing a node outside of our linked list we return undefined
    if (index < 0 || index >= this.length) return undefined
    // First we assign a variable the previous node
    const before = this.get(index - 1)
    // next we have a temporary variable pointing to the next node
    const temp = before.next
    // we then point the previous node to the next node
    before.next = temp.next
    // we then point the current node to null
    temp.next = null
    // we decrement the list length
    this.length--
    // we return the removed node
    return temp
  }
}
