describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect deeply nested children', function() {
    tree.addChild(10);
    tree.addChild(761);
    tree.addChild(199);
    tree.addChild(190);
    tree.addChild(19);
    tree.addChild(891);
    tree.addChild(71);
    tree.addChild(51);
    tree.addChild(31);
    tree.addChild(15);
    
    tree.children[9].addChild(666);
    tree.children[9].children[0].addChild(566);
    tree.children[9].children[0].children[0].addChild(120);
    tree.children[9].children[0].children[0].children[0].addChild(206);
    tree.children[9].children[0].children[0].children[0].addChild(200);

    expect(tree.contains(2)).to.equal(false);
    expect(tree.contains(200)).to.equal(true);
    expect(tree.contains(206)).to.equal(true);
    expect(tree.contains(71)).to.equal(true);
    expect(tree.contains(566)).to.equal(true);
  });

});
