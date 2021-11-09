const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
 for(let i=1; i<numbers.length; i++){
   let temp = array[i];
   //we are storing the second element 44 in temp
   j = i-1;
   //j becomes 1-1 = 0
   while(j>=0 && array[j] > temp){
     //j = 0 so first condition done and array[0] = 99 > 44 so we do array[1] = array[0] i.e. replace 44 by 99
      array[j+1] = array[j];
      j--;
   }
   array[j+1] = temp;
   //then we do array[1] = 44
   //this is how insertion sorting works
 }
}

insertionSort(numbers);
console.log(numbers);