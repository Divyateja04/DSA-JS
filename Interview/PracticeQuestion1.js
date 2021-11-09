//Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false
//--------------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true

//2 parameters - arrays, return true or false

//If we use two loops we get O(n^2) but this is bad because this code is nor scalable to higher datas
//FIRST METHOD - This is the easiest bruteforce method
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItems(arr1, arr2){
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if(arr1[i] == arr2[j]){
        return true;
      }
    }
  }
  return false;
}
//For time complexity, We observe this is more of O(a*b) instead of O(n^2)
//For space complexity, this is sorta like O(1)
// containsCommonItems(array1, array2);

//SECOND METHOD
//lets say array1 ==> {
//   a:true,
//   b:true,
//   c:true,
//   x:true
// }

//we can check if array2[index] === obj.properties
function containsCommonItems2(arr1, arr2){
  //loop through first array and create objects where properties are ids
  // we assume always two arrays are passed into the function and then one of the array is not null
  const map = {};
  arr1.forEach(item => {
    if(!map[item]){
      const x = item;
      map[item] = x;
    }
  })
  // console.log(map);
  //For space complexity, this is sorta like O(n)
  //loop through secnod array and see if item in second exists in objects
  for(let x=0; x<arr2.length; x++) {
    if(map[arr2[x]]){
      return true;
    }
  }
  return false;
}
//This gives O(a+b)=>O(n)
// containsCommonItems2(array1, array2);

function containsCommonItems3(arr1, arr2){
  return arr1.some(item => arr2.includes(item));
}
containsCommonItems3(array1, array2);
