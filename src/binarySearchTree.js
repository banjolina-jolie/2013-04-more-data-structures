var BinarySearchTree = function(val){
  this.val = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(newVal) {
  if (newVal < this.val && this.left) {
    this.left.insert(newVal);
  }

  if (this.left === null && newVal < this.val) {
    this.left = new BinarySearchTree(newVal);
  }

  if (newVal > this.val && this.right) {
    this.right.insert(newVal);
  }

  if (this.right === null && newVal > this.val) {
    this.right = new BinarySearchTree(newVal);
  }
};

BinarySearchTree.prototype.contains = function(someVal) {
  if (this.val === someVal) {
    return true;
  }

  if (this.val < someVal) {
    return this.right.contains(someVal);
  }

  if (this.val > someVal) {
    return this.left.contains(someVal);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this);
  if(this.right) {
    return this.depthFirstLog(this.right);
  }
  if (this.left) {
    return this.depthFirstLog(this.left);
  }
};