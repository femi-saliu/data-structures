var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree,treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = new Tree(value);
  tree.parent = this;
  this.children.push(tree);
};

treeMethods.contains = function(target){
  //base cases
  if(this.value === target) {
    return true;
  }
  else if(this.children.length === 0) {
    return false;
  }

  return _.reduce(this.children, function(test,tree) {
    return tree.contains(target) || test;
  },false);

treeMethods.removeFromParent = function(tree){

}


};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild() is O(1)
// contains() is O(n)
