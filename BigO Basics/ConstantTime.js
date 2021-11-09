//If we have a function like the following
const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
}
//Here whatever input we give to the function it always performs only one operation and gives a constant output
//So this is O(1) --> Constant Time 

const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}
logFirstTwoBoxes(boxes); //O(2)?
//but still it's constant so we still call it O(1)