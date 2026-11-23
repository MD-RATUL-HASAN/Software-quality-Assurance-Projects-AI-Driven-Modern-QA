// Q2. With AI: Use ChatGPT or Claude to generate a JavaScript program that finds the largest number in an array.
//  Run the code and verify the output using [12, 5, 25, 8].
//Answer :
const numbers = [12, 5, 25, 8];

// Using Math.max with the spread operator
const largestNumber = Math.max(...numbers);

console.log("The largest number is:", largestNumber);