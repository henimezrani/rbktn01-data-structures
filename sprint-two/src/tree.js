var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	// this.value = value;
	this.children.push(Tree(value));
	// child
};

treeMethods.contains = function(target, boo) {

	var boo = boo || [];

	if(this.children.length > 0){
		for (var i = 0 ; i < this.children.length ; i++) {
			this.children[i].contains(target, boo)
		}
	}
	if (this.value === target) {
		boo.push("gdf");
	}
	if (boo.length === 0) {
		return false;
	} else {
		return true;
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
