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

  it("should remove a tuple when a key is passed through the remove method", function() {
    hashTable.insert(["foo", "bar"]);
    hashTable.insert(["hambergnars", "delicious"]);
    hashTable.remove("hambergnars");
    expect(hashTable.retrieve("hambergnars")).toEqual(undefined);
  });

  it("should double its limit when 75% of storage is filled up", function() {
    hashTable.insert(["foo", "bar"]);
    hashTable.insert(["hambergnars", "delicious"]);
    hashTable.insert(["noodle", "stringy"]);
    hashTable.insert(["gnar", "ubergnar"]);
    hashTable.insert(["gnarbra", "totes"]);
    hashTable.insert(["super", "duper"]);
    expect(hashTable.retrieve("super")).toEqual("duper");
    expect(hashTable._limit).toEqual(12);
  });

  it("should cut limit in half if only 25% of storage is filled", function() {
    hashTable.insert(["foo", "bar"]);
    hashTable.insert(["hambergnars", "delicious"]);
    hashTable.insert(["noodle", "stringy"]);
    hashTable.insert(["gnar", "ubergnar"]);
    hashTable.insert(["gnarbra", "totes"]);
    hashTable.insert(["super", "duper"]);
    expect(hashTable.retrieve("super")).toEqual("duper");
    expect(hashTable._limit).toEqual(12);
    hashTable.remove("foo");
    hashTable.remove("hambergnars");
    hashTable.remove("noodle");
    hashTable.remove("gnar");
    expect(hashTable.retrieve("super")).toEqual("duper");
    expect(hashTable._limit).toEqual(3);
  });
});