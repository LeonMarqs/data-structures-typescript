class NodeD {
  public data: number;
  public next: NodeD | null;
  public previous: NodeD | null;

  constructor(data: number, previous: NodeD | null = null, next: NodeD | null = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

export default class DoublyLinkedList {
  public head: NodeD | null ;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data: number): void {
    let node: NodeD =  new NodeD(data);

    if(!this.head) {
      node.next = node.previous = node;
      this.head = node;
    }

    let tail = this.head.previous;

    node.next = this.head;
    node.previous = tail;

    tail!.next = this.head.previous = node;

    this.head = node;

    this.size++;
  }

  insertLast(data: number): void {
    let node: NodeD =  new NodeD(data);

    if(!this.head) {
      node.next = node.previous = node;
      this.head = node;
    }

    let tail = this.head.previous;
    node.next = this.head;
    
    this.head.previous = node;
    node.previous = tail;
    tail!.next = node;

    this.size++;  
 
  }

  removeFirst() {
    if(!this.head) {
      return false;
    }

    if(this.size == 1) {
      this.clearList();
      return true;
    }

    let secondNode = this.head.next;
    let lastNode = this.head.previous;
    lastNode!.next = secondNode;
    secondNode!.previous = lastNode;
    this.head = secondNode;

    this.size--;
  }

  removeLast() {
    if(!this.head) {
      return false;
    }

    if(this.size == 1) {
      this.clearList();
      return true;
    }

    let tail = this.head.previous;
    let newLastNode = tail!.previous;

    newLastNode!.next = this.head;
    this.head.previous = newLastNode;
    
    this.size--;
  }

  clearList(): boolean {
    this.head = null;
    return true;
  }

  printListDataFromFirst(): void {
    let currentNode: NodeD | null = this.head;

    for(let i: number = 0; i < this.size; i++) {
      console.log("data: " + currentNode!.data + " | previous: " + currentNode!.previous!.data + " | next: " + currentNode!.next!.data);
      currentNode = currentNode!.next;
    }

  }

  printListDataFromLast(): void {
    let currentNode: NodeD | null = this.head!.previous;

    for(let i: number = 0; i < this.size; i++) {
      console.log("data: " + currentNode!.data + " | previous: " + currentNode!.previous!.data + " | next: " + currentNode!.next!.data);
      currentNode = currentNode!.previous;
    }

  }

}
