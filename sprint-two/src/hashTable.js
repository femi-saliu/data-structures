var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
    this._storage.set(i,[v]);
  } else {
    var oldArray = this._storage.get(i);
    this._storage.set(i,oldArray.concat(v));
  }
  this._size++;

  //check to expand
  if(this._size >= 0.75*this._limit) {
    this._limit *= 2;
    var newStorage = LimitedArray(this._limit);
    this._storage.each(function(val, index, array) {
      newStorage.set(index,val);
    });
    this._storage = newStorage;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(i);

  //remove
  // console.log(arrayAtIndex);
  // if (!arrayAtIndex){debugger};
  var result = arrayAtIndex[0];
  arrayAtIndex.splice(0,1);
  arrayAtIndex.push(result);
  this._storage.set(i,arrayAtIndex);
  return result;
};

HashTable.prototype.remove = function(k){

//check to contract
//remove
// console.log('before resize: ' + this._limit);

  if((this._limit>8) && this._size <= 0.25*this._limit) {
    //remove
    // console.log('resizing..');


    this._limit /= 2;
    var newStorage = LimitedArray(this._limit);
    this._storage.each(function(val, index, array) {
      var map = index % this._limit;
      if(newStorage.get(map) === undefined) { newStorage.set(map, []); }
      newStorage.get(map).push(val);
    });
    console.log("newStorage: ", newStorage);
    this._storage = newStorage;
  }

  //remove
  // console.log('after resizing ' + this._limit);

  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, ind, obj) {
    if(obj[ind] === undefined) { obj[ind] = [null]; }
    if(ind === i) { obj[ind] = [null]; }
  });
  this._size--;

};





/*
 * Complexity: What is the time complexity of the above functions?
 */
 /*
 Average:
   Insert : O(1)
   Retrieve : O(1)
   Remove : O(1)
*/
