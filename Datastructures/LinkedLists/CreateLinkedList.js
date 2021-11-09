// 1-->10-->5-->16
// 1-->10-->99-->5-->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node{
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class LinkedList {

  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
    //constructor only builds the first node so we are assuming we have only one element in the inital case
  }
  
  append(value){ 
    //adds a number to the end;
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    //here first we update tail.next so that the head/tail gets updated, then we replace the tail with new node
    //if we replace line 22 with this.tail = {} and code then we see that the next in the head is not getting updated
  }
  
  prepend(value){ 
    //adds a number to the start;
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    //here first we update head.next so that the head/tail gets updated, then we replace the head with new node
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode != null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }

    if(index === 0){
      return this.prepend(value);
    }
    
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index);
    //we go to that index and stay
    newNode.next = leader.next;
    //this assigns our current next to he new node so that the enxt elements are not replaced
    leader.next = newNode;
    //then we replace the next element to leader with our added node and the next elements
    this.length++;
  }

  traverseToIndex(index){
    let counter = index;
    let currentNode = this.head;

    while(currentNode != null && counter > 1){
      // console.log(currentNode.value);
      counter--;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(index){
    //check params
    const leader = this.traverseToIndex(index);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 9);
myLinkedList.remove(3);
myLinkedList.printList();
// console.log(myLinkedList);