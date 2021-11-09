//Recursion is when we call something within it's own body
//It is a function that refers to itself
//Receptions are very much prone to stack ovrflows due to nothing stopping them from running

let counter = 0;
function inception(){
  debugger;
  console.log(counter);
  if(counter > 3){
    return 'done!';
  }
  counter++;
  inception();//if we comment the above code we get stack overflow
}

inception();
//In this situation once counter becomes 4 and it rturns done, it starts popping off the functions from the stack which has LIFO and so the function is popped out so the last return value becomes undefined

// 1. Identify the base case - when to stop
// 2. Identify the recursive case - return inception() part
// 3. Get closer and closer and return when needed. Usually we have two return statements


//Review---
//Recursion is used in a lot of sorting 