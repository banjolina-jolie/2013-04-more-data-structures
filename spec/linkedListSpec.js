describe("linkedList", function() {
  var linkedList;

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
    linkedList.addToTail("data1");
    expect(linkedList.head.value).toEqual("data1");
  });

  it("the 'next' property value of the firstNode should equal secondNode", function(){
    linkedList.addToTail("data1");
    linkedList.addToTail("data2");
    expect(linkedList.head.next.value).toEqual("data2");
  });

  it("should return original head and returns it", function() {
    linkedList.addToTail("data1");
    linkedList.addToTail("data2");
    expect(linkedList.removeHead()).toEqual("data1");
  });

  it("should make node linked to head the new head", function() {
    linkedList.addToTail("data1");
    linkedList.addToTail("data2");
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual("data2");
  });

  it("should have a 'contains' method that returns a boolean value indicating whether node is contained in linked list", function(){
    linkedList.addToTail("data1");
    linkedList.addToTail("data2");
    linkedList.addToTail("data3");
    expect(linkedList.contains("data2")).toEqual(true);
    expect(linkedList.contains("data1")).toEqual(true);
    expect(linkedList.contains("data4")).toEqual(false);

  });

});