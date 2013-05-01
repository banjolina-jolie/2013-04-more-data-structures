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

treeMethods.contains = function(){
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};