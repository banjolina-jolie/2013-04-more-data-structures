describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(10);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should insert a node with a value upon calling insert", function() {
    expect(binarySearchTree.contains(10)).toEqual(true);
    binarySearchTree.insert(5);
    expect(binarySearchTree.contains(5)).toEqual(true);
    binarySearchTree.insert(3);
    expect(binarySearchTree.contains(3)).toEqual(true);
  });

  it("should call a function on every node in tree", function() {
    binarySearchTree.insert(8);
    binarySearchTree.insert(12);
    var doIt = function(){
      alert(this.val);
    }
    binarySearchTree.depthFirstLog(doIt);
  });

});