describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should store string after calling insert(string)", function() {
  	hashTable.insert(["foo","bar"]);
  	hashTable.insert(["hambergnars", "delicious"]);
  	expect(hashTable.retrieve("foo")).toEqual("bar");
  	expect(hashTable.retrieve("hambergnars")).toEqual("delicious");
  });

  it("should return value for key passed through retrieve method", function() {
  	hashTable.insert(["foo", "bar"]);
  	hashTable.insert(["hambergnars", "delicious"]);
  	expect(hashTable.retrieve("hambergnars")).toEqual("delicious");
  });

  it("should remove a twople when a key is passed through the remove method", function() {
  	hashTable.insert(["foo", "bar"]);
  	hashTable.insert(["hambergnars", "delicious"]);
  	hashTable.remove("hambergnars");
  	expect(hashTable.retrieve("hambergnars")).toEqual(undefined);
  });

});