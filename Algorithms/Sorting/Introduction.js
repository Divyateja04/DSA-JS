//We can argue that all datastructures mostly have a sort but we realize that in interviews special preference is given to sorting and that in some cases they specify if it's sorting or not

//if we have small data we can directly use sorting functions
//but when we have larger datasets they become expensive
//google has to sort websites
//amazon sorts on categories
//netflix has series and movies
//apple has app store
//this is the reason they ask about sorting

//we have different sorting algorithms and we have to decide what to use depending on a situation

//we'll learn about
//1. Bubble Sort
//2. Insertion Sort
//3. Selection Sort
//4. Merge Sort
//5. Quick Sort

//Merge sort and quick sort use divide and conquer policy and these are stable
//https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important

//The issue with sort(); --->
//sort doesn't work properly with numbers unless we specify it properly
const basket = [2, 65, 34, 44, 6, 9];
basket.sort();
//this uses direct string/charcodeat comparisions
basket.sort((a,b) => {
  return a-b;
});
//According to sort() docs, the time and space complexity of this method depends on the implementation
//sort doesn't work with other languages too