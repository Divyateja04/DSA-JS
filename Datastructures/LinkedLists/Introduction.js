//In dynamic arrays an static arrays, whenever we try to add a new element and it doubled, it would become a performance issue and it would become O(n)
//A list that is linked
//Each item has a node that contains the data to be stored and a pointer to the next node, the first node is head while the last node is tail
//These are null-terminated i.e. last node points to null
const basket = ['apples', 'grapes', 'pears'];
//This is the array
// linked list: apples -> grapes -> pears
// apples
// 8947  --> grapes
//           8742  --> pears
//                     372  --> null
//All this is pseudo code and JS doesn't actually have a prebuilt linkedlist
//One advantage of linkedlist is that instead of moving all the elements we just change the address elements for the one before and after the node so it's easy to insert basically we don't have to shift
//(https://visualgo.net/en/list)

//1. prepend O(1)
//2. append O(1)
//3. lookup O(n)
//4. insert O(n)
//5. delete O(n)

//Pointer is a reference to another point or another node