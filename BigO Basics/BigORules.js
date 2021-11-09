//Rule 1 - Always take worst case scenarios, don't assume things will go your way

//Rule 2 of BigO
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

//O(1 + n/2 + 100) and we should drop constants so O(n)

//Rule 3 - Different terms for inputs
function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });

  boxes2.forEach(function(boxes){
    console.log(boxes);
  });
}
//Here since we have two different arrays, we get O(a+b)
//Log all pairs of array
const boxes = ["A", "B", "C", "D", "E"];
function logAllPairsOfArray(array){
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      console.log(array[i], array[j]);
    }
  }
}
logAllPairsOfArray(boxes);
//Here we get O(n * n) -> O(n^2) -> Quadratic Time

//Rule 4 - Drop Non-dominant terms
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])
//O(n + n^2) but here n^2 is dominant so n is not considered