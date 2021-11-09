//Arrays arrange data sequntially
//have the least amount of rules and smallest footprint of all the datastructures
//lookup and push -> O(1)
//insert and delete -> O(n)

const strings = ['a', 'b', 'c', 'd'];
//If each item takes up 4 shells(rows)[32 bit system each has 4 rows since 4*8 = 32], then we have 4*4 = 16 bytes

//1.Push - adds an element to last
strings.push('e'); //O(1) since we are not looping through anything
console.log(strings);

//2.Pop - removes last element
strings.pop();
strings.pop(); //here also similarly O(1)
console.log(strings);

//3.Unshift - adds an element to start
strings.unshift('x'); //O(n) because we are replacing all the elements so as to get x to the starting
console.log(strings);

//4.Splice - add to the middle
strings.splice(2, 0, 'alien');
//Here we start at '2' delete '0' elements and add 'alien' to the array
//We aren't changing the first two elements but changing the indexes of last two so it'll be O(n)
console.log(strings);

//============================================
//in static arrays, we have fixed length of array i.e. we have to specify the length of array before hand itself, but in dynamic arrays we can keep adding stuff, in static array we have push while in dynamic array we have append method
//In JS by default all are dynamic arrays but dynamic arrays have append which might become O(n) this is because we also loop here to create a new array(UNDER THE HOOD) so still it's being looped