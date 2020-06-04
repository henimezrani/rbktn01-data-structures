class DoublyLinkedList {
  constructor(head, tail) {
    switch (arguments.length) {
      case 0:
        this.head = null;
        this.tail = null;
        break;
      case 1:
        this.head = new Node(head);
        this.tail = new Node(head);
        break;
      default:
        this.head = new Node(head);
        this.tail = new Node(tail);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
  }

  addToHead(value) {
    var newHead = new Node(value);
    var previousHead = this.head;
    if (this.head === null && this.tail === null) {
      this.tail = newHead;
      this.head = newHead;
    } else {
      this.head.prev = newHead;
      this.head = newHead;
      this.head.next = previousHead;
    }
  }
  removeHead() {
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return null;
    }
    var removedHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    return removedHead.value;
  }

  addToTail(value) {
    var newTail = new Node(value);
    var previousTail = this.tail;
    if (this.head === null && this.tail === null) {
      this.tail = newTail;
      this.head = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
      this.tail.prev = previousTail;
    }
  }

  removeTail() {
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
      return null;
    }
    var removedTail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return removedTail.value;
  }

  forEach(callback) {
    var currentNode = this.head;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
    return false;
  }

  contains(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
