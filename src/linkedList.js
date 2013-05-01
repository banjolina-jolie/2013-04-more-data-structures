// Note: don't use an array to do this. innocuous change testing git knowledge..
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(val){
    var node = makeNode(val);
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
    var nextHead = this.head.next;
    delete this.head;
    this.head = nextHead;
    return currentHead.value;
  };

  newLinkedList.contains = function(val, node){
    // node = newLinkedList.head;
    //   while(node === newLinkedList.head || node.next) {
    //     if (node.value === val) {
    //       return true;
    //     }
    //     node = node.next;
    //   }
    // return false;
    node = node || this.head;
    if(node.value === val) {
      return true;
    }
    if (!node.next) {
      return false;
    } else {
      node = node.next;
      return newLinkedList.contains(val, node);
    }
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
