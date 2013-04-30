describe("linkedList", function() {
  var linkedList;
  var firstNode = makeNode("data1");
  var secondNode = makeNode("data2");

  beforeEach(function() {
    linkedList = makeLinkedList();

  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should have a head value after adding first node", function(){
    linkedList.addToTail(firstNode);
    expect(linkedList.head).toEqual(firstNode);
  });

  it("the 'next' property value of the firstNode should equal secondNode", function(){
    linkedList.addToTail(firstNode);
    linkedList.addToTail(secondNode);
    expect(firstNode.next).toEqual(secondNode);
  });

  it("should return original head and returns it", function() {
    linkedList.addToTail(firstNode);
    linkedList.addToTail(secondNode);
    expect(linkedList.removeHead()).toEqual(firstNode);
  });

  it("should make node linked to head the new head", function() {
    linkedList.addToTail(firstNode);
    linkedList.addToTail(secondNode);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(secondNode);
  });
});