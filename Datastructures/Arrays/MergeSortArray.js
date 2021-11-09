//mergeSortedArrays([0,3,4,31], [4,6,30]);
//Gives [0,3,4,4,6,30,31]

//We can have two nested loops comparing each and every element but this becomes O(n^2)

const mergeSortedArrays = (array1, array2) => {
  const mergedArray = [];

  //Check input
  if(array1.length == 0){
    return array2;
  }else if(array2.length == 0){
    return array1;
  }

  let i = 0;
  let j = 0;

  while(array1[i] !== undefined || array2[j] !== undefined){
    // console.log(array1[i], array2[j]);
    if(!array2[j] || array1[i] < array2[j]){
      //we are checking !array2[j] because if the other array items are over then we automatically add the first one
      mergedArray.push(array1[i]);
      i++;
    }
    else{
      mergedArray.push(array2[j]);
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);