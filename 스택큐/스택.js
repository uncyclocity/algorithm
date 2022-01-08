class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    return this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0 ? true : false;
  }
  view() {
    return this.arr;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack.view());
myStack.pop();
console.log(myStack.view());
