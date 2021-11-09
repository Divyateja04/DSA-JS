//Dynamic Programming = Memoization + Divide and Conquer
//1. Can be divided into subproblems?
//2. Recursive Solution
//3. Are there repetitive subproblems
//4. Memoize subproblems
//5. Demand a raise from the boss

// Most of these can be approached using the following sequence:

// Find recursive relation
// Recursive (top-down)
// Recursive + memo (top-down)
// Iterative + memo (bottom-up)
// Iterative + N variables (bottom-up)

let calculations =0;

//Without Dynamic Programming
function fibonacci(n){
  calculations++;
  if(n < 2){
    return n;
  }
  return fibonacci(n-1)+fibonacci(n-2);
}
// fibonacci(7);

//In such problems, we are running fib(1) many times and then we have multiple overlaps

//With Dynamic Programming
function fibonacciMaster(){
  let cache = {};
  return function fib(n){
    // calculations++;
    if(n in cache){
      return cache[n];
    }else{
      if(n < 2){
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

const fasterFib = fibonacciMaster();

console.log("slow", fibonacci(10));
console.log("DP", fasterFib(10))
console.log(calculations);

//With DP, space complexity increases even though time complexity decreases