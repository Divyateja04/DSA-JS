function booo(n){
  for(let i=0; i<n.length; i++){
    console.log('boooo!');
  }
}

booo([1,2,3,4,5]); //here we are not changing space, so space complexity is O(1)

function arrayHi(n){
  let hiArray = [];
  for(let i=0; i<n; i++){
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayHi(6);