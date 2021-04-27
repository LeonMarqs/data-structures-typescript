class NodeS {
  public data: number;
  public next: NodeS | null;

  constructor(data: number, next: NodeS | null = null) {
    this.data = data;
    this.next = next;
  }
}

export default class Stack {
  public top: NodeS | null;
  public size: number;

  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data: number) {
    let node: NodeS = new NodeS(data);
    let currentTop: NodeS | null = this.top;
    
    if(!this.top) {
      this.top = node;
    } else {
      this.top = node;
      this.top.next = currentTop;
    }

    this.size++;
  }

  pop() {
    if(this.size == 1) {
      this.reinicialize();
      return;

    } else if(this.size <= 0) {
      console.log("Stack is empty");
      return;
    }

    let currentTopNext: NodeS | null = this.top!.next;
    this.top = currentTopNext;
    this.size--;
  }

  reinicialize() {
    this.top = null;
    this.size = 0;
  }

  printListData(): void {
    let top: number | string = this.top ? this.top.data : 'null';
    let currentNode: NodeS | null = this.top;

    console.log("Top: " + top);

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
