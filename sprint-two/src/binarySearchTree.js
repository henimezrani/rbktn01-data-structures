var BinarySearchTree = function(value) {
	var node = {};
	node.value = value;
	node.left;
	node.right;
	Object.assign(node, methods);

	return node;
};

var methods = {
	insert: function(value, currentNode) {
		var currentNode = currentNode || this;

		if(currentNode.value > value ){
			if(currentNode.left) {
				this.insert(value, currentNode.left);
			}else{
				currentNode.left = new BinarySearchTree(value);
			}
		} else {
			if(currentNode.right) {
				this.insert(value, currentNode.right);
			}else{
				currentNode.right = new BinarySearchTree(value);
			}
		}

	},
	contains: function(value, currentNode, result) {
		var currentNode = currentNode || this;
		var result = result || false;

		if(!result){
			if(value === currentNode.value){
			 result = true;
			 return result;
			}

			if(currentNode.value > value ){
				if(currentNode.left){
					return this.contains(value, currentNode.left, result);
				}
			} 
			else {
				if(currentNode.right) {
					return this.contains(value, currentNode.right, result);
				}
			}
		}

		return result;
	},
	depthFirstLog: function(func, currentNode) {
		if(currentNode === undefined){
			var currentNode = this;
			func(currentNode.value);
			this.depthFirstLog(func, currentNode.left);
			this.depthFirstLog(func, currentNode.right);
		}
		else{
			var currentNode = currentNode;
				func(currentNode.value);
			if(currentNode.right) {
				this.depthFirstLog(func, currentNode.right);
			}
			if(currentNode.left) {
				this.depthFirstLog(func, currentNode.left);
			}
		}
	}
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
