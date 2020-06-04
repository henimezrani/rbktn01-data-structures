describe("set", function () {
  var set;

  beforeEach(function () {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function () {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it("should add values to a set", function () {
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains("Danny Glover")).to.equal(true);
    expect(set.contains("Susan Sarandon")).to.equal(true);
  });

  it("should remove values from a set", function () {
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });
  it("should check for uniqueness", function () {
    set.add("Mel Gibson");
    set.add("Mel Gibson");
    set.add(1);
    set.add(1);
    expect(set.contains("Mel Gibson")).to.equal(true);
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
    expect(set.contains(1)).to.equal(true);
    set.remove(1);
    expect(set.contains(1)).to.equal(false);
  });
  it("should only accept numbers and strings", function () {
    set.add("Mel Gibson");
    set.add(5);
    set.add([2, 5]);
    set.add(true);
    set.add({ "2": 5, heni: 6 });
    expect(set.contains("Mel Gibson")).to.equal(true);
    expect(set.contains(5)).to.equal(true);

    expect(set.contains([2, 5])).to.equal(false);
    expect(set.contains(true)).to.equal(false);
    expect(set.contains({ "2": 5, heni: 6 })).to.equal(false);
    expect(set.contains("any other value")).to.equal(false);
  });
});
