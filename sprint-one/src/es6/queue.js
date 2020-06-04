class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end++] = value;
  }

  dequeue() {
    var tmp = this.storage[this.start];
    if (this.size()) {
      delete this.storage[this.start];
      this.start++;
    }
    return tmp;
  }

  size() {
    return this.end - this.start;
  }
}
