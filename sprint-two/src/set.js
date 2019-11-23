var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	if ((typeof item === "string" || typeof item === "number") && this._storage[item] === undefined )
		this._storage[item] = item;
};

setPrototype.contains = function(item) {
	if (typeof item === "string" || typeof item === "number")
		return this._storage[item] !== undefined;
	return false;
};

setPrototype.remove = function(item) {
		delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
