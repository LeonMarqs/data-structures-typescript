class NodeQ {
  public data: number;
  public next: NodeQ | null;

  constructor(data: number, next: NodeQ | null = null) {
    this.data = data;
    this.next = next;
  }
}

export default class Queue {
  public first: NodeQ | null;
  public size: number;

  constructor() {
    this.first = null;
    this.size = 0;
  }

  enqueue(data: number) {
    let node: NodeQ = new NodeQ(data);
    let currentNode: NodeQ | null = this.first;

    if(!this.first) {
      this.first = node;
    } else {
      while(currentNode!.next) {
        currentNode = currentNode!.next;
      }
      currentNode!.next = node;
    }

    this.size++;
  }

  dequeue() {
    if(this.size <= 0) {
      console.log("Queue is empty");
      return;

    } else if (this.size === 1) {
      this.reinicialize()
      return;
    }

    let firstNext: NodeQ | null = this.first!.next;
    this.first = firstNext;
    this.size--;
  }

  reinicialize() {
    this.first = null;
    this.size = 0;
  }

  printListData(): void {
    let first: number | string = this.first ? this.first.data : 'null';
    let currentNode: NodeQ | null = this.first;

    console.log("first: " + first);

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
