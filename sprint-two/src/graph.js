

var Graph = function(){
  //nodes: array
  //edges: object of node:adjacency list
  this.nodes = [];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
  this.edges[node] = [];
};

Graph.prototype.contains = function(node){
  return _.indexOf(this.nodes,node) >= 0;
};

Graph.prototype.removeNode = function(node){
  var index = _.indexOf(this.nodes,node);  //need to update this.edges
  if (index >= 0){
    this.nodes.splice(index,1);
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)) {
    return _.indexOf(this.edges[fromNode],toNode) >= 0;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)) {
    if(!this.hasEdge(fromNode,toNode)) {
      this.edges[fromNode].push(toNode);
      this.edges[toNode].push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.hasEdge(fromNode, toNode)) {
    var fromIndex = _.indexOf(this.edges[fromNode],toNode);
    var toIndex = _.indexOf(this.edges[toNode],fromNode);

    if(fromIndex >= 0) { this.edges[fromNode].splice(fromIndex,1); }
    if(toIndex >= 0) { this.edges[toNode].splice(toIndex,1); }
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(val) {
    cb(val);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 //Let the number of nodes = |V|
 //Let the number of edges = |E|
 /*
addNode() : O(1)
contains(): O(|V|)
removeNode() : O(|V|)
hasEdge() : O(|V|)
addEdge() : O(|V|)
removeEdge : O(|V|)
forEachNode : O(|V|) * complexity of 'cb' */




