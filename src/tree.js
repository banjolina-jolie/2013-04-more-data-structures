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
  console.log("this: " + this.value + " val: " + val);
  if(this.value === val) {
    console.log("in the true" + this.value);
    return true;
  }
  if (this.children.length) {
    for(var i = 0; i < this.children.length; i++) {
      var refer = this.children[i];
      console.log("loop: " +refer.value);
      return this.children[i].contains(val);
      // return false;
    }
  }
  return false;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};