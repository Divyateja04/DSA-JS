//Just an optimization technique using cache ,solving problems by breaking them down into sub problems and storing these solutions in the cache

//Memoization ~~~ Caching
function addTo80(n){
  return n+80;
}
addTo80(5);
addTo80(5);
addTo80(5);
//here the whole function runs 3 times even though they have the sme input and output

function memoizedAddTo80(){
  let cache = {};
  console.log("cache");
  return function(n){
    if(n in cache){
      return cache[n];
    } else {
      console.log("Long time");
      cache[n] = n+80;
      return cache[n];
    }
  }
}

const memoized = memoizedAddTo80();
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(5));
//We use closures to keep the cache inside the function