// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// psuedocode
// input: number greater that 2
// output: array in the same length as the given number contiaing fibonacci sequence
// input: 6
// output: [1, 1, 2, 3, 5, 8]
// create a function called greaterThanTwo that takes in a number
// parameter called number
//research: fibonacci is a series of numbers found by adding up the two numbers before it
// length is 6 so there will be 6 values in my array
      // [1, 1, 2, 3, 5, 8]
// index: 0  1  2  3  4  5
// fibonacci: these are your starting values of fibonacci [1, 1, to get the next number add the two numbers right before 1+1=2 => 1, 1, 2 then 2+1=3 => 1, 1, 2, 3]
// the starting values for index 0 and 1 are 1 and 1
// [1,1]
// for index 2 you add index 0 and 1
// place value inside array
// [1,1,2]
// for index 3 you add index 1 and 2
// place value inside array
// [1, 1, 2, 3]
// place value inside array and keep going with rest of the numbers
// return array in same length with fibonacci

// a) Create a test with expect statements for each of the variables provided.

describe("greaterThanTwo", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6;
    // Expected output: [1, 1, 2, 3, 5, 8]

    const fibLength2 = 10;
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    expect(greaterThanTwo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(greaterThanTwo(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});
// initial test output:
// --->  FAIL  ./code-challenges.test.js
//  ReferenceError: greaterThanTwo is not defined

// b) Create the function that makes the test pass.
const greaterThanTwo = (number) =>{
  let newArray = []
  for(let i=0; i<number.length; i++{
    newArray.push(number[i] +)
  })
}
// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
};
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9];
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96];
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = [];
// Expected output: []

// b) Create the function that makes the test pass.
