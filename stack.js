//Implementing a stack with an array is much easier. Push and Pop are there by default. Same with the length property so we dont need to use something like this.length similar to creating a LL from scratch.

class Stack {
  constructor(){
    this.array = [];
  }
  peek(){
    return this.array[this.array.length - 1];
  }

  push(value){
    this.array.push(value);
    return this;
  }

  pop(){
    this.array.pop();
    return this;
  } 
}

const myStack = new Stack();

myStack.push('Google');
myStack.push('Amazon');
// myStack.pop();

// console.log(myStack);
console.log(myStack.peek());
