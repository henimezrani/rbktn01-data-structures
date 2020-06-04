var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var node = new Tree(value);
  this.children.push(node);
};

// Old version
treeMethods.containsOld = function (target, boo) {
  var boo = boo || false;

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    boo = this.children[i].contains(target, boo);
  }

  return boo;
};

// Optimized version
treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};
