import Stack from './Stack';
import Queue from './Queue';
import LinkedList from './LinkedList';
import mergeSort from './MergeSort';

// --------------------- LinkedList ------------
console.log(" ------------- Linked List ---------------");
let ll: LinkedList = new LinkedList;

ll.insertLast(120);
ll.insertFirst(100);
ll.insertFirst(500);
ll.insertFirst(200);
ll.insertAtIndex(1, 2);
ll.insertAtIndex(10, 2);
// console.log(ll.getAtIndex(2));
ll.removeAtIndex(2);
ll.printListData();
ll.clearList();

// ----------------- STACK -------------------
console.log(" ---------------- STACK -----------------");
let stack: Stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.printListData();

stack.pop();
stack.printListData();

stack.pop();
stack.pop();
stack.pop();
stack.pop();

// ----------------- QUEUE -------------------
console.log(" ---------------- QUEUE -----------------");
let queue: Queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.printListData();

queue.dequeue();
queue.dequeue();
queue.printListData();

// ----------------- Merge Sort -------------------
console.log(" ------------- MERGE SORT ---------------");
let array: number[] = [4, 6, 1, 10, 12, 15, 18, 20];
console.log(mergeSort(array));