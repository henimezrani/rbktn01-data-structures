// import { assert } from 'chai';

describe("DoublyLinkedList", function () {
  describe("Node", function () {
    it("constructor: should accept a value", function () {
      const node = new Node(1);
      expect(node.value).to.equal(1);
    });
  });

  describe("DoublyLinkedList", function () {
    // constructor
    it("constructor: should accept head and tail constructor values", function () {
      const doublyLinkedList = new DoublyLinkedList(1, 2);
      expect(doublyLinkedList.head.value).to.equal(1);
      expect(doublyLinkedList.tail.value).to.equal(2);
    });

    it("constructor: should accept no constructor values", function () {
      const doublyLinkedList = new DoublyLinkedList();
      expect(doublyLinkedList.head).to.equal(null);
      expect(doublyLinkedList.tail).to.equal(null);
    });

    it("constructor: should have a head and tail", function () {
      const doublyLinkedList = new DoublyLinkedList();
      expect(doublyLinkedList).to.have.property("head");
      expect(doublyLinkedList).to.have.property("tail");
    });

    it("addToHead: should add a single item in a list correctly", function () {
      const doublyLinkedList = new DoublyLinkedList(1, 2);
      doublyLinkedList.addToHead(3);

      expect(doublyLinkedList.head.value).to.equal(3);
      expect(doublyLinkedList.head.next.value).to.equal(1);
    });

    const doublyLinkedListNoParams = new DoublyLinkedList();

    // addToHead
    it("addToHead: should add a single item in a empty list correctly", function () {
      doublyLinkedListNoParams.addToHead("firstItem");
      expect(doublyLinkedListNoParams.head.value).to.deep.equal("firstItem");
      expect(doublyLinkedListNoParams.head).to.deep.equal(doublyLinkedListNoParams.tail);
    });

    it("addToHead: should add a second item in single itemed list correctly", function () {
      doublyLinkedListNoParams.addToHead("secondItem");
      expect(doublyLinkedListNoParams.tail).to.deep.equal(doublyLinkedListNoParams.head.next);
      expect(doublyLinkedListNoParams.head).to.deep.equal(doublyLinkedListNoParams.tail.prev);
      expect(doublyLinkedListNoParams.head.value).to.deep.equal("secondItem");
      expect(doublyLinkedListNoParams.tail.value).to.deep.equal("firstItem");
    });

    it("addToHead: should add a third item in two itemed list correctly", function () {
      doublyLinkedListNoParams.addToHead("thirdItem");
      expect(doublyLinkedListNoParams.head).to.deep.equal(doublyLinkedListNoParams.tail.prev.prev);
      expect(doublyLinkedListNoParams.tail).to.deep.equal(doublyLinkedListNoParams.head.next.next);
      expect(doublyLinkedListNoParams.head.value).to.equal("thirdItem");
      expect(doublyLinkedListNoParams.head.next).to.deep.equal(doublyLinkedListNoParams.tail.prev);
      expect(doublyLinkedListNoParams.tail.value).to.equal("firstItem");
    });

    // removeHead
    it("removeHead: should remove the first item in three itemed list correctly", function () {
      doublyLinkedListNoParams.removeHead();
      expect(doublyLinkedListNoParams.head.value).to.equal("secondItem");
      expect(doublyLinkedListNoParams.tail.value).to.equal("firstItem");
    });

    it("removeHead: should remove the first item in two itemed list correctly", function () {
      doublyLinkedListNoParams.removeHead();
      expect(doublyLinkedListNoParams.head.value).to.equal("firstItem");
      expect(doublyLinkedListNoParams.tail.value).to.equal("firstItem");
    });

    it("removeHead: should remove an item from a single itemed list correctly", function () {
      doublyLinkedListNoParams.removeHead();
      expect(doublyLinkedListNoParams.head).to.equal(null);
      expect(doublyLinkedListNoParams.tail).to.equal(null);
    });

    const doublyLinkedListWithParams = new DoublyLinkedList();

    // addToTail
    it("addToTail: should add a single item in a empty list correctly", function () {
      doublyLinkedListWithParams.addToTail("firstItem");
      expect(doublyLinkedListWithParams.tail.value).to.deep.equal("firstItem");
      expect(doublyLinkedListWithParams.tail).to.deep.equal(doublyLinkedListWithParams.head);
    });

    it("addToTail: should add a second item in single itemed list correctly", function () {
      doublyLinkedListWithParams.addToTail("secondItem");
      expect(doublyLinkedListWithParams.head).to.deep.equal(doublyLinkedListWithParams.tail.prev);
      expect(doublyLinkedListWithParams.tail).to.deep.equal(doublyLinkedListWithParams.head.next);
      expect(doublyLinkedListWithParams.tail.value).to.deep.equal("secondItem");
      expect(doublyLinkedListWithParams.head.value).to.deep.equal("firstItem");
    });

    it("addToTail: should add a third item in two itemed list correctly", function () {
      doublyLinkedListWithParams.addToTail("thirdItem");
      expect(doublyLinkedListWithParams.head).to.deep.equal(doublyLinkedListWithParams.tail.prev.prev);
      expect(doublyLinkedListWithParams.tail).to.deep.equal(doublyLinkedListWithParams.head.next.next);
      expect(doublyLinkedListWithParams.head.value).to.equal("firstItem");
      expect(doublyLinkedListWithParams.head.next).to.deep.equal(doublyLinkedListWithParams.tail.prev);
      expect(doublyLinkedListWithParams.tail.value).to.equal("thirdItem");
    });

    // removeTail
    it("removeTail: should remove the last item in three itemed list correctly", function () {
      doublyLinkedListWithParams.removeTail();
      expect(doublyLinkedListWithParams.head.value).to.equal("firstItem");
      expect(doublyLinkedListWithParams.tail.value).to.equal("secondItem");
    });

    it("removeTail: should remove the last item in two itemed list correctly", function () {
      doublyLinkedListWithParams.removeTail();
      expect(doublyLinkedListWithParams.head.value).to.equal("firstItem");
      expect(doublyLinkedListWithParams.tail.value).to.equal("firstItem");
    });

    it("removeTail: should remove an item from a single itemed list correctly", function () {
      doublyLinkedListWithParams.removeTail();
      expect(doublyLinkedListWithParams.head).to.equal(null);
      expect(doublyLinkedListWithParams.tail).to.equal(null);
    });

    const doublyLinkedList = new DoublyLinkedList();

    // forEach
    it("forEach: should iterate over a list from the head to tail correctly", function () {
      doublyLinkedList.addToHead("thirdItem");
      doublyLinkedList.addToHead("fourthItem");
      doublyLinkedList.addToHead("fifthItem");

      const nodeList = [];
      const addToNodeList = (node) => nodeList.push(node);
      doublyLinkedList.forEach(addToNodeList);

      expect(nodeList[0].value).to.equal("fifthItem");
      expect(nodeList[1].value).to.equal("fourthItem");
      expect(nodeList[2].value).to.equal("thirdItem");
    });

    // contains
    it("contains: should contain a value that was added", function () {
      expect(doublyLinkedList.contains("fifthItem")).to.equal(true);
      expect(doublyLinkedList.contains("fourthItem")).to.equal(true);
      expect(doublyLinkedList.contains("thirdItem")).to.equal(true);
      expect(doublyLinkedList.contains("sixthItem")).to.equal(false);
    });

    it("contains: should not contain a value that was removed", function () {
      doublyLinkedList.removeHead();
      expect(doublyLinkedList.contains("fifthItem")).to.equal(false);
    });
  });
});
