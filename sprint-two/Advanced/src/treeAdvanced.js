var TreeAdvanced = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  console.log(newTree)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newTree = TreeAdvanced(value);
	newTree.parent = this;

	this.children.push(newTree);
};

treeMethods.removeFromParent = function(target) {
	var boo = boo || false;

	if (this.value === target) {
		boo = true;
	}else if(this.children.length > 0){
		for (var i = 0 ; i < this.children.length ; i++) {
			boo = this.children[i].removeFromParent(target, boo);
			if(boo) {
				this.children.splice(i,1)
				boo = false;
				break;
			}
		}
	}

	return boo;
}

treeMethods.contains = function(target, boo) {
	var boo = boo || false;

	if (this.value === target) {
		boo = true;
	}else if(this.children.length > 0){
		for (var i = 0 ; i < this.children.length ; i++) {
			boo = this.children[i].contains(target, boo);
		}
	}

	return boo;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
