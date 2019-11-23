

// Instantiate a new graph
var Graph = function(value) {
	this.graph = Array();
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

	if (this.graph[node] !== undefined){
		this.graph[node][node] = 1;
	} else {
		var tmpLength = this.graph.length;

		this.graph[node] = [];
		this.graph[node][node] = 1;
	}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.graph[node][node] === 1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	this.graph[node][node] = undefined;
	for (var i = 0; i < this.graph.length; i++) {
		if (this.graph[i]){
			this.graph[i][node] = undefined;
			this.graph[node][i] = undefined;
		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return Boolean(this.graph[fromNode][toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
		if(this.graph[toNode] === undefined || this.graph[fromNode] === undefined){
		this.graph[fromNode] = [];
		this.graph[fromNode][toNode] = 1;
		this.graph[toNode] = [];
		this.graph[toNode][fromNode] = 1;
	}else{
		this.graph[fromNode][toNode] = 1;
		this.graph[toNode][fromNode] = 1;
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if(this.graph[toNode] === undefined || this.graph[fromNode] === undefined){
		this.graph[fromNode] = [];
		this.graph[fromNode][toNode] = undefined;
		this.graph[toNode] = [];
		this.graph[toNode][fromNode] = undefined;
	}else{
		this.graph[fromNode][toNode] = undefined;
		this.graph[toNode][fromNode] = undefined;
	}

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var i = 0; i < this.graph.length; i++) {
		cb(i)
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


