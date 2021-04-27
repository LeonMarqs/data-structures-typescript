class NodeL {
  public data: number;
  public next: NodeL | null;

  constructor(data: number, next: NodeL | null = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
  public head: NodeL | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data: number): void {
    this.head = new NodeL(data, this.head);
    this.size++;
  }

  insertLast(data: number): void {
    let currentNode: NodeL | null = this.head;
    let node: NodeL =  new NodeL(data);

    if(!this.head) {
      this.head = node;
      
    } else {
      while(currentNode!.next) {
        currentNode = currentNode!.next;
      }

      currentNode!.next = node;
      
    }
    this.size++;
  }

  insertAtIndex(data: number, index: number): void {
    let node: NodeL = new NodeL(data);
    let currentNode: NodeL | null = this.head;
    let nextNode, previousNode: NodeL | null;
    let currentIndex: number = 0;

    if(!this.head) {
      this.head = node;

    } else {

      if(index > this.size) { // Insert at last index if it is out of range
        this.insertLast(data);
        return;
      } else if(index == 0) {
        this.insertFirst(data);
        return;
      }

      while(currentIndex < index) {
        previousNode = currentNode;
        currentIndex++;
        currentNode = currentNode!.next;
      }

      previousNode!.next = node;
      node.next = currentNode;

      this.size++;
    }
  }

  getAtIndex(index: number): number | null {
    let currentNode: NodeL | null = this.head;
    let currentIndex: number = 0;

    while(currentNode) {
      if(currentIndex == index) {
        return currentNode.data;
      }
      currentIndex++;
      currentNode = currentNode!.next;
    }
    return null;
  }

  removeAtIndex(index: number): boolean {
    let currentNode: NodeL | null = this.head;
    let previousNode: NodeL | null;
    let currentIndex: number = 0;

    if(index > 0 && index > this.size) {
      return false;
    }

    //Remove first 
    if(index == 0) {
      if(!currentNode!.next) {
        return false;
      }
      this.head = currentNode!.next;

    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode!.next;
      } 
      previousNode!.next = currentNode!.next;
    }

    this.size--;
    return true;
  }

  clearList(): boolean {
    this.head = null;
    return true;
  }

  printListData(): void {
    let currentNode: NodeL | null = this.head;

    while(currentNode) {

      if(currentNode.next) {
        console.log("data: " + currentNode.data + " | next: " + currentNode.next.data)
      } else {
        console.log("data: " + currentNode.data);
      }

      currentNode = currentNode.next;
    }
  }

}
