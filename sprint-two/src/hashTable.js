
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var value = Tuple(k,v);
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(i) === undefined) {
    this._storage.set(i,[value]);
  } else {
    var oldArray = this._storage.get(i);
    oldArray.push(value);
    this._storage.set(i, oldArray);
  }
  this._size++;
  this.resize("grow");

};


HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(i);

  var result = null;
  _.each(array, function(tuple) {
    if(tuple.key === k) {
      result = tuple.value;
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(array, ind, storage) {
    if(array === undefined) {}
    if(ind === i) {
      _.each(array, function(tuple, index) {
        if(tuple.key === k) {
          array.splice(index,1);
        }
      });
    }
  });
  this._size--;

  this.resize("shrink");

};

HashTable.prototype.resize = function(action) {
  if(action === "grow"){
    // check if usage > 75%
    // if so, grow
    if(this._size >= 0.75 * this._limit) {
      this._limit *= 2;
      //remake the table
      var newStorage = LimitedArray(this._limit);
      this._storage.each(function(array, ind, storage) {

        _.each(array, function(tuple) {
          var iNew = getIndexBelowMaxForKey(tuple.key, this._limit);
          if(newStorage.get(iNew) === undefined) {
            newStorage.set(iNew,[tuple]);
          } else {
            var oldArray = newStorage.get(iNew);
            oldArray.push(tuple);
            newStorage.set(iNew, oldArray);
          }
        });

      });
      this._storage = newStorage;
    }


  } else if (action === "shrink"){
    // check if usage < 25%
    // if so, shrink
    if(this._size < 0.25 * this._limit) {
      this._limit = Math.floor(this._limit/2);
      //remake the table
      var newStorage = LimitedArray(this._limit);
      this._storage.each(function(array, ind, storage) {

        _.each(array, function(tuple) {
          var iNew = getIndexBelowMaxForKey(tuple.key, this._limit);
          if(newStorage.get(iNew) === undefined) {
            newStorage.set(iNew,[tuple]);
          } else {
            var oldArray = newStorage.get(iNew);
            oldArray.push(tuple);
            newStorage.set(iNew, oldArray);
          }
        });

      });
      this._storage = newStorage;
    }

  }
};

var Tuple = function(key, value){
  var pair = {
    key: key,
    value: value
  };
  return pair;
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
