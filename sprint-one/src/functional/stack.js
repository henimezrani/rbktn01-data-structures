var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    var index = Object.keys(storage).length;       
    var tmp = storage[index-1];
    delete storage[index-1];

    return tmp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
