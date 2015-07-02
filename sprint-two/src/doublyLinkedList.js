var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var newNode = new Node(value);
    newNode.next = this.head;
    if(this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
  };

  list.addToTail = function(value){
    //check if DoublyLinkedList is empty
    if (this.head === null){
      var newestNode = new Node(value);
      list.head = newestNode;
      list.tail = newestNode;
    } else {
      var newestNode = new Node(value);
      list.tail.next = newestNode;
      newestNode.previous = list.tail;
      list.tail = newestNode;
    }
  };

  list.removeHead = function(){
    if (list.head !== null){
      var oldHead = list.head;
      list.head = list.head.next;

      if (list.head){              //Edge case: when there was only one node in the list.
        list.head.previous = null;
      }

      var result = oldHead.value;
      delete oldHead;
      return result;
    }
  };

  list.removeTail = function(){
    if (list.tail !== null){
      var oldTail = list.tail;
      list.tail = list.tail.previous;
      if(list.tail) {
        list.tail.next = null;
      }
      var result = oldTail.value;
      delete oldTail;
      return result;
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
  node.previous = null;

  return node;
};
