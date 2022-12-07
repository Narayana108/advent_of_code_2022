const fs = require('fs');

try {
  var puzzleData = fs.readFileSync('./input.txt', 'utf8');
} catch (err) {
  console.error(err);
}

sampleData = `
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

const allCalories = puzzleData.split("\n\n");
const caloriesPerElfArray = [];

// Calculate each elves sum of callories and push to array
for (let i in allCalories) {
  let currentElfCaloriesArray = allCalories[i].split("\n");
  let currentElfsCaloriesCombined = 0;

  currentElfCaloriesArray.forEach(index => {
    //currentElfsCaloriesCombined += Number(index)
    currentElfsCaloriesCombined += +index // Is the same as above converts a string into a number
  })

  caloriesPerElfArray.push(currentElfsCaloriesCombined);
}


// PART 1 - Display the Elf carrying the most calories
const elfsSorted = caloriesPerElfArray.sort((num1, num2) => num2 - num1);
console.log(elfsSorted[0]);

// PART 2 - Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
const top3Elves = elfsSorted.splice(0,3);
const top3Sum = top3Elves.reduce((previous, current) => previous + current, 0);
console.log(top3Sum);
