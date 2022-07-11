// We're going to get the node that is at a particular index of a linked list

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
    // if the index is outside the possible range of our linked list we return undefined
    if (index < 0 || index >= this.length) return undefined
    // we track the current node we are on with temporary variable and set it to the beginning of the linked list
    let temp = this.head
    // we will then iterate through the linked list moving through each node until we reach our desired node
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    // we then return this node once the loop has finished
    return temp
  }
}
