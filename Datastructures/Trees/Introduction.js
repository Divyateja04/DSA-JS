//Trees can have 0 or more children, tree has a root and every root has some parents which have children and these have leaves and siblings too.
//An example of tree is html DOM
//a node can only point to its children 

//Binary Trees:
//Is a tree where every parent has only zero, one or two children and each children can have only one parent

//Perfect Binary Tree:
//This is one each and every node has 2 children
//Number of nodes doubles every level we go down
//The number of nodes in the last level = the number of all nodes in the previous levels + 1, so we have a sorta better efficiency and these have O(log n)

//Full Binary Tree:
//This is where we have 0 or 2 children

function BinaryTreeNode(value){
  this.value = value;
  this.left = null;
  this.right = null;
}