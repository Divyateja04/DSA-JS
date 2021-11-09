//Great for comparing and here we have O(logn) for lookup, delete and insert
//Left element always decreases i.e. less than the parent and right always increases i.e. more than the parent
//This preserves relations
//Balanced Search Trees have advantages of bniary trees such as O(logn) and stuff but unbalanced ones have O(n) which again becomes a disadvantage

//Pros:
//Really good performance
//Ordered
//Flexible Size

//Cons:
//No O(1) Operations we have do traversal for everytime

//We have 2 types of BSTs, AVL and Red Black Trees
//These ensures the trees are always balanced, AVL switches to do so while Red Black Trees have red/black coloured nodes but switches again