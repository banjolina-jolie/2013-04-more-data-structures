describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add a new node to the children array", function(){
    tree.addChild("Node1");
    expect("Node1").toEqual(tree.children[0].value);
  });

  it("should link child nodes to the current node", function(){

  });
});