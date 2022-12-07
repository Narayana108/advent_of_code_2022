// functional programming approach

const { puzzleData } = require('./input.js');

const sampleData = `
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
const allCalories = puzzleData.split("\n\n");

// Calculate each elves sum of callories and push to array
const getSumOfEachElfsCallories = function(group) {
  return group
    .split("\n")     // split the array into groups
    .map(Number)      // converst the strings into numbers
    .reduce((sum, num) => sum + num, 0); // get the sum of numbers in each group
}

// map loops over the elements
let elfCombinedCalloriesArray = allCalories.map(getSumOfEachElfsCallories);


// PART 1 - find the largest number 

//const largestCallory = Math.max.apply(null,elfCombinedCalloriesArray);
const largestCallory = Math.max(...elfCombinedCalloriesArray);    // the '...' is called a spread operator, it takes the values out of the array. As these functions expect numbers and not arrays.


// PART 2 - find the top 3 largest numbers and add them together

// sort the array in descending order
//const sortedElfCalloriesArray = elfCombinedCalloriesArray.sort((num1, num2) => num2 - num1); // The sort method, is a mutating method and over rides the original array(elfCombinedCalloriesArray)
const sortedElfCalloriesArray = [...elfCombinedCalloriesArray].sort((num1, num2) => num2 - num1); // The [...array] creates a copy of the array, that the original array is not over ridden.

// get the largest 3 values
const largest3 = [...sortedElfCalloriesArray].splice(0,3); // [...] creates a copy of the array, not to override the original

// add the numbers togther
const sumOfLargest3 = largest3.reduce((sum, num) => sum + num, 0);

console.log(largestCallory);
console.log(sumOfLargest3);
