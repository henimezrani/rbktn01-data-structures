var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {}
};

Queue.prototype.size = function() {
	return Object.keys(this.storage).length;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.size()] = value;
}

Queue.prototype.dequeue = function() {
	var tmp = this.storage[0];
	for (var i = 0; i < this.size() -1 ; i++) {
		this.storage[i] = this.storage[i + 1];
	}
	delete this.storage[this.size() - 1];
	return tmp;
}

