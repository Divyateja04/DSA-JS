//These two are same in implementation and stuff, only difference is how we delete stuff
//We can only access the first or last element here
//Same to build using arrays/linkedlists but these have limited methods and we can control what can happen with this data

//-----------------------------------

//Stacks
//These are like plates, with one plate of data and another plate comes and is stacked on it, we can only access the top most plate
//LIFO - Last In First Out
//Very good in knowing the last values and important in language specific engines
//Useful in browser history and maybe in texting and undoing those texts
//We store the data ins uch an order that last one is the most recent one
//Methods:
//Pop - remove a plate
//Push - add a plate
//Peek - get the top plate
//Lookup is just O(n) remaining are O(1) but we generally don't have Lookup
//These have a top and a bottom
//Both arrays and linkedlists are going to work well
//Arrays have cache locality which technically makes it faster
//Linkedlist have extra memory associated to them

//-----------------------------------

//Queues
//Like an entrance to a roller coaster, the first one goes in side first
//FIFO - First In First Out
//Waitlist/tickets app it uses Queues
//Methods:
//enqueue - add to the line
//dequeue - remove the person from the line(removes the first person)
//peek - tells the first person in the list and not the last
//Lookup is just O(n) remaining are O(1) but we generally don't have Lookup
//This is very ineffecient because we remove the first and then have to shift all this and creating a queue from arrays is hard
//Queues generally we should use linkedlists because arrays have indexes and if we remove the first item we have to shift remaining so we are better off using linkedlists where deletion is easier