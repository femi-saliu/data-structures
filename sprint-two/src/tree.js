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
};

treeMethods.removeFromParent = function(){
  if(this.parent) {
    var index = _.indexOf(this.parent.children,this);
    var offshoot = this.parent.children.splice(index,1)[0];
    offshoot.parent = null;
    return offshoot;
  }
}

treeMethods.traverse = function(callback){
  // callback(value)
  // loop through children and recurse
  callback.apply(this,[this.value]);
  for(var i=0; i<this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild() is O(1)
// contains() is O(n)
