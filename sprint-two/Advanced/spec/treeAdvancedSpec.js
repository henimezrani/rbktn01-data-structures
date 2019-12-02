describe('Tree Advanced', function() {
  var treeAdvanced;

  beforeEach(function() {
    treeAdvanced = TreeAdvanced();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(treeAdvanced.addChild).to.be.a('function');
    expect(treeAdvanced.contains).to.be.a('function');
    expect(treeAdvanced.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the treeAdvanced', function() {
    treeAdvanced.addChild(5);
    expect(treeAdvanced.children[0].value).to.equal(5);
  });

  it('should return true for a value that the treeAdvanced contains', function() {
    treeAdvanced.addChild(5);
    expect(treeAdvanced.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    treeAdvanced.addChild(5);
    expect(treeAdvanced.contains(6)).to.equal(false);
  });

  it('should be able to add children to a treeAdvanced\'s child', function() {
    treeAdvanced.addChild(5);
    treeAdvanced.children[0].addChild(6);
    expect(treeAdvanced.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    treeAdvanced.addChild(5);
    treeAdvanced.addChild(6);
    treeAdvanced.children[0].addChild(7);
    treeAdvanced.children[1].addChild(8);
    expect(treeAdvanced.contains(7)).to.equal(true);
    expect(treeAdvanced.contains(8)).to.equal(true);
  });

  it('should correctly detect deeply nested children', function() {
    treeAdvanced.addChild(10);
    treeAdvanced.addChild(761);
    treeAdvanced.addChild(199);
    treeAdvanced.addChild(190);
    treeAdvanced.addChild(19);
    treeAdvanced.addChild(891);
    treeAdvanced.addChild(71);
    treeAdvanced.addChild(51);
    treeAdvanced.addChild(31);
    treeAdvanced.addChild(15);
    
    treeAdvanced.children[9].addChild(666);
    treeAdvanced.children[9].children[0].addChild(566);
    treeAdvanced.children[9].children[0].children[0].addChild(120);
    treeAdvanced.children[9].children[0].children[0].children[0].addChild(206);
    treeAdvanced.children[9].children[0].children[0].children[0].addChild(200);

    expect(treeAdvanced.contains(2)).to.equal(false);
    expect(treeAdvanced.contains(200)).to.equal(true);
    expect(treeAdvanced.contains(206)).to.equal(true);
    expect(treeAdvanced.contains(71)).to.equal(true);
    expect(treeAdvanced.contains(566)).to.equal(true);
  });

});
