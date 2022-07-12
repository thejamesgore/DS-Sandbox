// The insert method will add a new node at a particular index with specifc value

class node {
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

  //   we will use the unshift method when creating insert
  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  //   we will use the get method when creating insert
  get(index) {
    if (index < 0 || index >= this.length) return undefined
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  //   we will use the push method when creating insert
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  insert(index, value) {
    // First we check to see if the index is outside of the range of the linked list, if so we return false
    if (index < 0 || index > this.length) return false
    // If there is only one item we will add it using the push method
    if (index === this.length) return this.push(value)
    // if there is no items we will use the unshift method
    if (index === 0) return this.unshift(value)

    // we create a new node with our value
    const newNode = new Node(value)
    // we track the previous nodes position using the get method and it's previous index
    const temp = this.get(index - 1)
    // we then point our new node to the same node in the linked list the previous node is pointing to
    newNode.next = temp.next
    // we then point the previous node to our new node
    temp.next = newNode
    // we then increase the length of the linked list
    this.length++
    // we then return true
    return true
  }
}

let myLinkedList = new LinkedList(0)
myLinkedList.push(2)
