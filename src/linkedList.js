// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(node){
    if(!newLinkedList.head){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;

    }
  };

  newLinkedList.removeHead = function(){
    var currentHead = this.head;
    this.head.next = this.head;
    delete this.head;
    return currentHead;
  };

  newLinkedList.contains = function(node){
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
