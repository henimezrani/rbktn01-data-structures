var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var tmp = Node(value);
    if(list.head === null && list.tail === null){
      list.head = tmp;
      list.tail = tmp;
    }else{
      tmp.previous = list.tail
      list.tail.next = tmp;
      list.tail = tmp;
    }
  };

  list.addToHead = function(value) {
    var tmp = Node(value);
    if(list.head === null && list.tail === null){
      list.head = tmp;
      list.tail = tmp;
    }else{
      tmp.next = list.head;
      list.head.previous = tmp;
      list.head = tmp;
    }
  };

  list.removeHead = function() {
    var tmp = list.head.value;
    list.head = list.head.next;

    return tmp;
  };

  list.removeTail = function() {
    var tmp = list.tail.value;
    list.tail = list.tail.previous;

    return tmp;
  };

  list.contains = function(target) {
    var currNode = list.head;

    while(currNode){
      if(currNode.value === target){
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null

  return node;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
