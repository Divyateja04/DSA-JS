const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (array) => {
  //base case
  if(array.length <= 1){
    return array;
  }

  //splitting arrays into halves
  const mid = Math.floor(array.length/2);
  const left = array.slice(0, mid); //mid is excluded
  const right = array.slice(mid, array.length);

  //we returned the merged array of again divided array
  return merge(
    mergeSort(left), 
    mergeSort(right)
    );
}

const merge = (left, right) => {
  const result = [];

  //to keep track of which element we are sending
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    const leftEl = left[leftIndex];
    const rightEl = right[rightIndex];
  
    if(leftEl < rightEl){
      result.push(leftEl);
      leftIndex++;
    }else{
      result.push(rightEl);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers, 0, 10);
console.log(answer);