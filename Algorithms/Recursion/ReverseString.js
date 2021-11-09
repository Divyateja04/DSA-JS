//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {

  let start = Math.floor(str.length/2);
  let arr = str.split("");

  for(let i=start; i>=0; i--){
    const d = arr[i];
    arr[i] = arr[str.length - i];
    arr[str.length - i] = d;
  }

  return arr.join("");
}

const reverseStringRecursive = (str) => {
  if(str == ""){
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}
//Here first we are removing all the elements and returning all the elements ni stack
//say we have abc
//we remove a and add it to stack, then b, then c
//Stack is (top)c|b|a|(bottom) and we return cba in reverse


reverseStringRecursive('yoyo mastery');
//should return: 'yretsam oyoy'