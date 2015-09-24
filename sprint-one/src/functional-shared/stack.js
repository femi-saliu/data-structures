var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    top : 0,
    storage : {}
  };

  _.extend(someInstance, stackMethods);
  return someInstance;

};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  if(this.top > 0) {
    this.top--;
    var result = this.storage[this.top];
    delete this.storage[this.top];
    return result;
  }
};

stackMethods.size = function() {
  return this.top;
};



