class Queue {
  constructor() {
    this.arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.shift();
  }
  head() {
    return this.arr[0];
  }
  tail() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0 ? true : false;
  }
}

const myQueue = new Queue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
