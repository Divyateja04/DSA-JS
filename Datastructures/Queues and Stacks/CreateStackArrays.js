//Creating Stacks using Arrays

class Stack{
  constructor(){
    this.array = [];
  }

  peek(){
    console.log(this.array[this.array.length - 1]);
  }

  push(value){
    this.array.push(value);
  }

  pop(){
    this.array.pop();
  }
}

const myStack = new Stack();
myStack.push("8");
myStack.push("7");
myStack.push("6");
myStack.pop();
myStack.peek();
console.log(myStack);