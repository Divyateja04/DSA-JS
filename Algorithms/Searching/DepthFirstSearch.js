//This search follows one branch until we find the required value or we reach the end after this, we go to the nearest ancestor and see if it has any other branches
//    9 
//   4 20
//  1 6 15 170
//Search order [9, 4, 1, 6, 20, 15, 170]
//Left first

//Pros:
//Time Complexity of BFS and DFS is same
//Best for finding if paths exist or not
//Less memory

//Cons:
//Can get slow

//BFS and DFS on CreateBinarySearchTree file