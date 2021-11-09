//1. The preorder traversal is a traversal in which first we visit the root node, then the left subtree, and then the right subtree

//2. If we want to traverse the nodes in ascending order, then we use the inorder traversal. The following are the steps required for the inorder traversal:
//Visit all the nodes in the left subtree
//Visit the root node
//Visit all the nodes in the right subtree

//3. The postorder traversal is one of the traversing techniques used for visiting the node in the tree. It follows the principle LRN (Left-right-node). The following are the steps used for the postorder traversal:
//Traverse the left subtree by calling the postorder function recursively.
//Traverse the right subtree by calling the postorder function recursively.
//Access the data part of the current node.


//1. HEAPS
//Mostly we'll talk about Binary Heaps and this means we'll have 2 childs only
//In every heap every child is less than the parent and this is max heap, there's also a min heap where every child is more than the parent
//Here lookup becomes O(n) while insert and delete is O(log N)
//Binary Heap is great at doing comparative operations say we need numbers greater than something or example
//Memory heap is not same as heap data structure
//Memory heap is a region in our memory where we store data

//2. Priority Queues
//Not same as queues, in queues we have FIFO but in priority queue each element has a different priority and elements with higher priority are served before those with lower priority. Examples in clubs and Emergency rooms 

//3. Trie
//A specialized tree used in searching and can outperform most searches, mostly used for letters
//Used for searches, predictions and stuff