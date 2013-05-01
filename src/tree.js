var makeTree = function(val){
  var newTree = {};
  newTree.value = val;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  this.children.push(makeTree(val));
};

treeMethods.contains = function(val){
  if(this.value === val) {
    return true;
  }
  for(var i = 0; i < this.children.length; i++) {
    var refer = this.children[i];
    if(this.children[i].contains(val)) {
      return true;
    }
  }
  return false;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};