//Creating Stacks using Linkedlists

class Node{
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class Queue{
  constructor(){
    this.first = null,
    this.last = null, 
    this.length = 0;
  }

  peek(){
    console.log(this.first);
  }

  dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }

  enqueue(value){
    const node = new Node(value);

    if(this.length === 0){
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.length++;
  }
}

const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
queue.peek();
queue.dequeue();
queue.peek();
// console.log(queue);