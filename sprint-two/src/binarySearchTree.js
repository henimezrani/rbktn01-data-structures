var BinarySearchTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  this.value > value
    ? (this.left && this.left.insert(value)) || (!this.left && (this.left = new BinarySearchTree(value)))
    : (this.right && this.right.insert(value)) || (!this.right && (this.right = new BinarySearchTree(value)));
};

BinarySearchTree.prototype.contains = function (target) {
  if (this.value === target) {
    return true;
  }
  return this.value > target ? !!this.left && this.left.contains(target) : !!this.right && this.right.contains(target);
};
BinarySearchTree.prototype.depthFirstLog = function (callback, currentNode) {
  callback(this.value);
  this.left && this.left.depthFirstLog(callback);
  this.right && this.right.depthFirstLog(callback);
};

// BinarySearchTree.prototype.insert = function (value) {
//   var currentNode = new BinarySearchTree(value);
//   if (this.value > value) {
//     // if (this.left) {
//     //   this.left.insert(value);
//     // } else {
//     //   this.left = currentNode;
//     // }
//     (this.left && this.left.insert(value)) || (!this.left && (this.left = currentNode));
//   } else {
//     // if (this.right) {
//     //   this.right.insert(value);
//     // } else {
//     //   this.right = currentNode;
//     // }
//     (this.right && this.right.insert(value)) || (!this.right && (this.right = currentNode));
//   }
// }
