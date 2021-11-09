//Here concept is we first loop through and find the least value and then replace it then also loop from the next number and continue to loop through

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for(let i=0; i<array.length; i++){
    for(let j=i; j<array.length; j++){
      if(array[j] < array[i]){
        const ar = array[i];
        array[i] = array[j];
        array[j] = ar;
     }
    }
  }
}

selectionSort(numbers);
console.log(numbers);