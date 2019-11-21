

// Instantiate a new graph
var Graph = function(value) {
	this.graph = Array();
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

	if (this.graph[node] !== undefined){
		console.log('entering this')
		this.graph[node][node] = 1;
	} else {
		this.graph[node] = Array.from(Array(node + 1), function(){
			return 0;
		});
		for (var i = 0 ; i < node ; i++) {
			if(this.graph[i] === undefined){
				this.graph[i] = Array.from(Array(node + 1), function(){
					return 0;
				});
			}
			this.graph[i][node] = 0;
		}
		this.graph[node][node] = 1;
	}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.graph[node][node] === 1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for (var i = 0; i < this.graph.length; i++) {
		this.graph[i][node] = 0;
	}
	for (var i = 0; i < this.graph.length; i++) {
		this.graph[node][i] = 0;
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return Boolean(this.graph[fromNode][toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.graph[fromNode][toNode] = 1;
	this.graph[toNode][fromNode] = 1;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	this.graph[fromNode][toNode] = 0;
	this.graph[toNode][fromNode] = 0;
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


