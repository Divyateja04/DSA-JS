// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if(number === 1){
    return 1;
  }
  return number*findFactorialRecursive(number - 1);
}//O(n)

function findFactorialIterative(number) { 
  let answer = number;
  for(let i=(number-1); i>0; i--){
    answer = answer * i;
  }
  return answer;
} //O(n)

findFactorialIterative(1);
findFactorialRecursive(3);