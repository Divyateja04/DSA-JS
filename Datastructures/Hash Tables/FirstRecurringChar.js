//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  //Okay so we can use loops and arrays which would lead to O(n^2) which we completely don't need
  //Since we have learnt hashtables we can try that

  randObject = {};
  for(let i=0; i<input.length; i++){
    if(randObject[input[i]] != undefined){
      //not undefined means there's already a term there and so
      return input[i];
    }
    randObject[input[i]] = input[i];
  }
}
firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2