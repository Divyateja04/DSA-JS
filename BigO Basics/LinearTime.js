const { performance } = require('perf_hooks');

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'nigel', 'marlin', 'nemo', 'gill', 'bloat', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

//To find efficiency we use operations as measure instead of time since time varies from computer/network to another one
//Big O is the most complex scenario/worst case situation a algorithm can come across
//Here we observe that as number of elements in array increases the number of operations also increase linearly
//So we say this has a Big O notation of O(n) -->  which means Linear Time Proportionality

function findNemo(array){
  for(let i=0; i<array.length; i++){
    if(array[i] == "nemo"){
      console.log("Found NEMO!");
    }
  }
}

findNemo(large);
