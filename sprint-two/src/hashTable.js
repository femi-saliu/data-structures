var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
    this._storage.set(i,[v]);
  } else {
    var oldArray = this._storage.get(i);
    this._storage.set(i,oldArray.concat(v));
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(i);
  console.log(typeof arrayAtIndex);
  var result = arrayAtIndex[0];
  arrayAtIndex.splice(0,1);
  arrayAtIndex.push(result);
  this._storage.set(i,arrayAtIndex);
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, ind, obj) {
    if(ind === i) { obj[ind] = [null]; }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
