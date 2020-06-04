var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var tmp = new Node(value);
    if (list.head === null && list.tail === null) {
      list.head = tmp;
    } else {
      list.tail.next = tmp;
    }
    list.tail = tmp;
  };

  list.removeHead = function () {
    var tmp = list.head.value;
    list.head = list.head.next;
    return tmp;
  };

  list.contains = function (target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
