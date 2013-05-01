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
    tree.addChild("Node2");
    expect("Node1").toEqual(tree.children[0].value);
    expect("Node2").toEqual(tree.children[1].value);
    tree.children[1].addChild("Node3");
    expect("Node3").toEqual(tree.children[1].children[0].value);
  });

  it("calling 'contains' on a node for a value that exists within that node returns true", function(){
    tree.addChild("Node0");
    tree.addChild("Node1");
    tree.children[1].addChild("Node1-0");
    tree.children[0].addChild("Node0-0");
    tree.children[0].addChild("Node0-1");
    expect(tree.contains("Node0")).toEqual(true);
    // expect(tree.contains("Node1")).toEqual(true);
    // expect(tree.contains("Notnode")).toEqual(false);
  });
});