//Can you create a function that reverses a string
//For example, 'Hi I am me'
//should give 'em ma I iH'

//My solution:
const reverse = (str) => {
  if(typeof(str) != "string" || (!str)) {
    return "Submit a valid String"
  }
  const revArray = []; //O(1)
  // stringArray = str.split(""); //O(n)
  for(let i = 0; i < str.length; i++){
    revArray.push(str[str.length - i - 1]); //O(1)
  }
  return revArray.join(""); //O(n)
}
reverse('Hi I am me');

//ZTM solution
const reverseString = (str) => {
  if(typeof(str) != "string" || (!str)) {
    return "Submit a valid String"
  }

  const backwards = [];
  const len = str.length - 1;
  for(let i = len; i >= 0; i--){
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
}
reverseString('Hi I am me');