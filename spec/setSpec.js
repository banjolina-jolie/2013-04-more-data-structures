describe("set", function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should contain string after calling add(string) method", function() {
  	set.add("poo");
  	expect(set.contains("poo")).toEqual(true);
  })

  it("calling remove(string) should delete property from storage", function() {
  	set.add("poo");
  	set.add("superdoodoo");
  	set.remove("poo");
  	expect(set.contains("poo")).toEqual(false);
  });

});