//Patil Rohit Kalyan
//Roll No. = 2201149
//Program for reversing stack using queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  reverseStack(stack) {
    let queue = new Queue();

    while (!stack.isEmpty()) {
      queue.enqueue(stack.pop());
    }

    while (!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }

    return stack;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.items); // outputs [1, 2, 3]

stack = stack.reverseStack(stack);

console.log(stack.items); // outputs [3, 2, 1]
