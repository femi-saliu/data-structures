var BinarySearchTree = function(value){
  var bst = Object.create(BinarySearchTree.prototype);

  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

BinarySearchTree.prototype.insert = function(value){
  if (value < this.value){
    if (this.left === null){
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null){
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if (value < this.value && this.left === null) { return false; }
  if (value > this.value && this.right === null) { return false; }
  if (value === this.value) { return true; }
  return value < this.value ? this.left.contains(value) : this.right.contains(value);
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback.apply(this,[this.value]);
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
