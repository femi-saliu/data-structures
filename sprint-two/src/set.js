var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(_.indexOf(this._storage,item) < 0){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  return _.indexOf(this._storage,item) >= 0;
};

setPrototype.remove = function(item){
  var index = _.indexOf(this._storage,item);
  if (index >= 0){
    this._storage.splice(index,1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
