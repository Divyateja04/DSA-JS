//Creating Stacks using LinkedList

class Node{
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class Stack{
  constructor(){
    this.top = null,
    this.bottom = null,
    this.length = 0
  }

  peek(){
    console.log(this.top);
  }

  push(value){
    const node = new Node(value);
    node.next = this.top;
    if(this.length == 0){
      this.bottom = node;
    }
    this.top = node;
    this.length++;
  }

  pop(){
    if(!this.top){
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    const top = this.top.next;
    this.top = top;
    this.length--;
  }
}

const myStack = new Stack();
myStack.push("8");
myStack.push("7");
myStack.push("6");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
console.log(myStack);