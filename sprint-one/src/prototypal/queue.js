var Queue = function () {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;
  return instance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.end++] = value;
  },

  dequeue: function (value) {
    var tmp = this.storage[this.start];
    if (this.size()) {
      delete this.storage[this.start];
      this.start++;
    }
    return tmp;
  },
  size: function () {
    return this.end - this.start;
  }
};
