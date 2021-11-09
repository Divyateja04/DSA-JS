//Find first and last element
const array = [
  {
    tweet: 'hi',
    date: 2012
  },
  {
    tweet: 'my',
    date: 2004
  },
  {
    tweet: 'teddy',
    date:2018
  }
];
//O(n^2) since we need nested loops to find dates and tweets

//Big O notation of "".length is it depends on the language we are working with, in JS it's not a function but rather a property and this gives O(1)