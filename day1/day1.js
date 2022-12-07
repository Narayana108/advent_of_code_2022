const { puzzleInput } = require('./puzzleSample.js');

const sampleInput = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

// convert string into array
const arr = sampleInput.split("\n\n");

// get the sum of the group
const getSumOfGroup = function(group) {
  const arr1 = group.split("\n");     // split the array into groups
  const arr2 = arr1.map(Number);      // converst the strings into numbers
  const arr3 = arr2.reduce((sum, num) => sum + num, 0); // get the sum of numbers in each group
  return arr3;
}

// A map loops over the elements
let sumGroup = arr.map(getSumOfGroup);

// PART 1 - find the largest number 

//const biggest = Math.max.apply(null,sumGroup);
const maxNumber = Math.max(...sumGroup);    // the '...' is called a spread operator, it takes the values out of the array. As these functions expect numbers and not arrays.


// PART 2 - find the top 3 largest numbers and add them together

// sort the array in descending order
//const sortArray = sumGroup.sort((num1, num2) => num2 - num1); // The sort method, is a mutating method and over rides the original array(sumGroup)
const sortArray = [...sumGroup].sort((num1, num2) => num2 - num1); // The [...array] creates a copy of the array, that the original array is not over ridden.

// get the largest 3 values
const largest3 = [...sortArray].splice(0,3); // [...] creates a copy of the array, not to override the original

// add the numbers togther
const sumOfLargest3 = largest3.reduce((sum, num) => sum + num, 0);

console.log(maxNumber);
console.log(sumOfLargest3);
