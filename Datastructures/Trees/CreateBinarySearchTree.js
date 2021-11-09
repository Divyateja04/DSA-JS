class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    const node = new Node(value);

    if(this.root === null){
      this.root = node;
    }
    else{
      let currentNode = this.root;

      while(true){
        if(value < currentNode.value){
          //left
          if(!currentNode.left){
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if(!currentNode.right){
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }

    }
  }

  lookup(value){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else if(value == currentNode.value){
        return currentNode;
      }
    }
    return false;
  }

  remove(value){
    if(!this.root){
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while(currentNode){
      if(currentNode.value < value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if(currentNode.value > value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(currentNode.value === value){
        //Here we have a match and so we need to find the next number to replace this

        //Logic is that if we have to remove a number we need to find the number closest to that and figure out how to get that to be it's parentNode

        //Option1: No right node:
        if(currentNode.right === null){
          if(parentNode === null){
            this.root = currentNode.left;
          }
          else{
            //if parent > currentValue then make currentNodes's left child a child of parent basically we are removing currentNode and replacing with currentNode.left
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value){
              parentNode.right = currentNode.left;
            }
            //if parent < currentValue then make current left child a right child of parent basically we are removing currentNode but since this node is greater than the parent and this doesn't have any smaller than parent terms it becomes right to parent
          }
        //Option 2: Right child which doesn't have a left child
        }
        else if(currentNode.right.left === null){
          if(parentNode === null){
            this.root = currentNode.left;
          }
          else{
            //if parent > currentValue then make currentNodes's right child a child of parent basically we are removing currentNode and replacing with currentNode.right
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value){
              parentNode.right = currentNode.right;
            }
            //if parent < currentValue then make current right child a right child of parent basically we are removing currentNode
          }
        //Option 3: Right child with a left child
        }
        else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      //We are checking if we have a left/right node and then adding it to the queue so that it'll check those next
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
      //now since it has left/right in the array, while condition is satisfied and it goes through the loop again
      //even if we get more, since it's a queue, it's FIFO
    }
  }

  //here we pass queue and list cause if not then they get reassigned everytime
  breadthFirstSearchR(queue, list){
    if(queue.length == 0){
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left){
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  
  DFSInorder(){
    return traverseInorder(this.root, []);
  }

  DFSPreorder(){
    return traversePreorder(this.root, []);
  }

  DFSPostorder(){
    return traversePostorder(this.root, []);
  }
}

function traverseInorder(node, list){
  //console.log(node.value);
  //Inorder gives in ascending order
  if(node.left){
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if(node.right){
    traverseInorder(node.right, list);
  }
  return list;
}

function traversePreorder(node, list){
  //console.log(node.value);
  //Preorder gives in ascending order
  list.push(node.value);
  if(node.left){
    traversePreorder(node.left, list);
  }
  if(node.right){
    traversePreorder(node.right, list);
  }
  return list;
}

function traversePostorder(node, list){
  //console.log(node.value);
  //Postorder gives in reverse order
  if(node.left){
    traversePostorder(node.left, list);
  }
  if(node.right){
    traversePostorder(node.right, list);
  }
  list.push(node.value);
  return list;
}

//   9
//  4 20
//1 6 15 170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.lookup(19);
// tree.remove(6);
// tree.breadthFirstSearchR([tree.root], []);

console.log(tree.DFSPreorder());
console.log(tree.DFSInorder());
console.log(tree.DFSPostorder());

// JSON.stringify(traverse(tree.root));
// JSON.stringify(traverse2(tree.root));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverse2(node){
  const tree = { value: node.value };
  if(node.left){
      tree.left = traverse(node.left);
  }
  if(node.right){
      tree.right = traverse(node.right);
  }
  return tree;
}