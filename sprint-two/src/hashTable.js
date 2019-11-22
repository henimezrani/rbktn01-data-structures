

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = [k,v];

  if(this._storage.get(index) !== undefined){
		bucket = this._storage.get(index);
  }
  
  bucket.push(tuple);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this._storage.get(index);

  if(this._storage.get(index) !== undefined){
	  for (var i = element.length - 1; i >= 0; i--) {
	  	if (element[i][0] === k) {
	  		return element[i][1]
	  	}
	  }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index,undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


