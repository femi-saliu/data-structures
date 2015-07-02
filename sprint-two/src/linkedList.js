var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //check if LinkedList is empty
    if (this.head === null){
      var newestNode = new Node(value);
      list.head = newestNode;
      list.tail = newestNode;
    } else {
      var newestNode = new Node(value);
      list.tail.next = newestNode;
      list.tail = newestNode;
    }
  };

  list.removeHead = function(){
    if (list.head !== null){
      var oldHead = list.head;
      list.head = list.head.next;
      return oldHead.value;
    }
  };

  list.contains = function(target){
    if(list.head !== null){
      var current = list.head;
      while(current !== null){
        if(current.value === target){
          return true;
        }
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addToTail() is O(1)
// removeHead() is O(1)
// contains() is O(n)
