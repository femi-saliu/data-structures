var Tree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = new Tree(value);
  tree.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  // check current tree's value
  if (this.value === target){
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
  // check if value is contained in one of the children
  // loop through children and recurse
  callback.apply(this,[this.value]);
  for (var i=0; i<this.children.length; i++){
    if (this.children[i].contains(target)){
        return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild() is O(1)
// contains() is O(n)
