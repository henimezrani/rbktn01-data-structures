describe("tree", function () {
  var tree;

  beforeEach(function () {
    tree = Tree(0);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function () {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it("should add children to the tree", function () {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it("should return true for a value that the tree contains", function () {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it("should return false for a value that was not added", function () {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it("should be able to add children to a tree's child", function () {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should correctly detect nested children", function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it("should traverse a tree Depth First", function () {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[0].addChild(5);
    tree.children[1].addChild(6);
    tree.children[1].addChild(7);
    tree.children[0].children[0].addChild(8);
    tree.children[0].children[1].addChild(9);
    tree.children[0].children[1].addChild(10);
    tree.children[1].children[1].addChild(11);
    tree.children[1].children[1].children[0].addChild(12);
    var traverseDFArray = [];
    tree.traverseDF((elem) => {
      traverseDFArray.push(elem);
    });
    expect(traverseDFArray).to.deep.equal([0, 1, 4, 8, 5, 9, 10, 2, 6, 7, 11, 12, 3]);
  });

  it("should traverse a tree Breadth First", function () {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[0].addChild(5);
    tree.children[1].addChild(6);
    tree.children[1].addChild(7);
    tree.children[0].children[0].addChild(8);
    tree.children[0].children[1].addChild(9);
    tree.children[0].children[1].addChild(10);
    tree.children[1].children[1].addChild(11);
    tree.children[1].children[1].children[0].addChild(12);
    var traverseBFArray = [];
    tree.traverseBF((elem) => {
      traverseBFArray.push(elem);
    });
    expect(traverseBFArray).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});
