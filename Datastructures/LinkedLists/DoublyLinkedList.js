//In doubly linked lists we have two pointers one to the next node and one to the previous node
//Singly ilsts have less memory and are sorta faster
//in the singly lists, we can lose if we lose heads and we can't iterate
//in doubly lists we can iterate from both sides it is complex though and requires more memory and storage
class Node{
  constructor(value){
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

class DoublyLinkedList {

  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
    //constructor only builds the first node so we are assuming we have only one element in the inital case
  }
  
  append(value){ 
    //adds a number to the end;
    const newNode = new Node(value);
    newNode.prev = this.tail;
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
    this.head.prev = newNode;
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
    const follower = leader.next;
    //we go to that index and stay
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
    //this assigns our current next to he new node so that the enxt elements are not replaced
    //then we replace the next element to leader with our added node and the next elements
    this.length++;
    // console.log(newNode);
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
    //here array rn is [9, 1, 10, 99, 5, 16]
    const leader = this.traverseToIndex(index);
    //here this is 10 with next as 99 and prev as 1
    const unwantedNode = leader.next;
    //to be deleted which is 99
    const follower = unwantedNode.next;
    leader.next = follower;
    //we replacing 99 with num after 99 which is 5
    follower.prev = leader;
    //we replacing 99 in prev of 99 which is 10 to 5
    this.length--;
    // console.log(leader);
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 9);
myLinkedList.remove(3);
myLinkedList.printList();
// console.log(myLinkedList);