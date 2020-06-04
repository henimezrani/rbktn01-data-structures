var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target, boo) {
  var boo = boo || false;

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    boo = this.children[i].contains(target, boo);
  }

  return boo;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
