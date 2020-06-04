var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  if ((typeof item === "string" || typeof item === "number") && this._storage[item] === undefined) {
    this._storage[item] = true;
  }
};

setPrototype.contains = function (item) {
  return (typeof item === "string" || typeof item === "number") && !!this._storage[item];
};

setPrototype.remove = function (item) {
  this._storage[item] = false;
};
