//Bubble sort goes through the list chooses 2 swap depending on which is higher and continues to do so until we get a sorted list
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for(let k=1; k<numbers.length; k++){
    for(let i=0; i<numbers.length-k; i++){
      if(array[i] > array[i+1]){
        const temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);