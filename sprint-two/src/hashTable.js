var HashTable = function (limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function (k, v, boo) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index) || [];
  bucket.push(tuple);
  this._storage.set(index, bucket);
  this._size++;
  if (this._limit * 0.75 < this._size && !boo) {
    this.changeSize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = bucket.length - 1; i >= 0; i--) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this._storage.get(index);
  var tmp;

  if (this._storage.get(index) !== undefined) {
    for (var i = element.length - 1; i >= 0; i--) {
      if (element[i][0] === k) {
        tmp = element.splice(i, 1);
      }
    }
  }
  this._size--;
  if (this._limit * 0.25 > this._size) {
    this.changeSize(this._limit / 2);
  }
  return tmp;
};

HashTable.prototype.changeSize = function (newLimit) {
  var newHashTable = new HashTable(newLimit);
  this._storage.each((bucket, index, collection) => {
    if (Array.isArray(bucket)) {
      bucket.forEach((tuple) => {
        newHashTable.insert(tuple[0], tuple[1], true);
      });
    }
  });
  this._limit = newHashTable._limit;
  this._storage = newHashTable._storage;
};
