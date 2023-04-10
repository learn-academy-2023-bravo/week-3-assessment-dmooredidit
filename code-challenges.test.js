// // ASSESSMENT 3: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// // psuedocode
// // input: number greater that 2
// // output: array in the same length as the given number contiaing fibonacci sequence
// // input: 6
// // output: [1, 1, 2, 3, 5, 8]
// // create a function called greaterThanTwo that takes in a number
// // parameter called number
// //research: fibonacci is a series of numbers found by adding up the two numbers before it
// // length is 6 so there will be 6 values in my array
// // [1, 1, 2, 3, 5, 8]
// // index: 0  1  2  3  4  5
// // fibonacci: these are your starting values of fibonacci [1, 1, to get the next number add the two numbers right before 1+1=2 => 1, 1, 2 then 2+1=3 => 1, 1, 2, 3]
// // the starting values for index 0 and 1 are 1 and 1
// // [1,1]
// // for index 2 you add index 0 and 1
// // place value inside array
// // [1,1,2]
// // for index 3 you add index 1 and 2
// // place value inside array
// // [1, 1, 2, 3]
// // place value inside array and keep going with rest of the numbers
// // return array in same length with fibonacci

// // a) Create a test with expect statements for each of the variables provided.

describe("greaterThanTwo", () => {
  it("takes in a number (greater than 2) and returns an array, that length, containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6;
// //     // Expected output: [1, 1, 2, 3, 5, 8]

    const fibLength2 = 10;
// //     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    expect(greaterThanTwo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(greaterThanTwo(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});

// // initial test output:
// // --->  FAIL  ./code-challenges.test.js
// //  ReferenceError: greaterThanTwo is not defined

// // psuedocode:
// // input: 6
// // output: [1, 1, 2, 3, 5, 8]
// // fibonacci: these are your starting values of fibonacci [1, 1, to get the next number add the two numbers right before 1+1=2 => 1, 1, 2 then 2+1=3 => 1, 1, 2, 3]
// // the starting values for index 0 and 1 are 1 and 1
// // [1,1]
// // for index 2 you add index 0 and 1
// // place value inside array
// // [1,1,2]
// // for index 3 you add index 1 and 2
// // place value inside array
// // [1, 1, 2, 3]
// // place value inside array and keep going with rest of the numbers
// // return array in same length with fibonacci

// // b) Create the function that makes the test pass.

const fibLength1 = 6;
// // Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10;
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibonacciArray = [1, 1];
for (let i = 0; i < 10; i++) {
  fibonacciArray[0] = fibonacciArray[2 - 2];
  fibonacciArray[1] = fibonacciArray[2 - 1];
  console.log(fibonacciArray(fibLength1));
}
const greaterThanTwo = (number) => {

  return newArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1])
  })
}
// console/log(greaterThanTwo)
// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// psuedocode: Create a function named studyMinutes that takes in an object and returns an array of the values sorted from least to greatest.
// Input: Object
// Output: Array with values sorted least to greatest
// create function called studyMinutes that takes in and object and outputs an array
// I'm thinking I can iterate over the array using the sort method
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
// // // Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// // Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("studyMinutes", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };
    //     // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65,
    };
    expect(studyMinutes(studyMinutesWeek1)).toEqual([
      15, 15, 20, 30, 30, 60, 90,
    ]);

    expect(studyMinutes(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ]);
  });
});

//  Output: FAIL  ./code-challenges.test.js
//  ReferenceError: studyMinutes is not defined

// b) Create the function that makes the test pass.

// const studyMinutes = (object) => {
//   return(studyMinutesWeek1.sort()){
//   return(studyMinutesWeek2.sort())
//   }
// };
function studyMinutes(object) {
  let object1 = studyMinutesWeek1.sort();
  return object1;
  let object2 = studyMinutesWeek2.sort();
  return object2;
}
// console.log(studyMinutes(studyMinutesWeek1));
// console.log(studyMinutes(studyMinutesWeek2));

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// psuedocode: Create a function named accuSum that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// Input: Array
// Output: Array with sum accumulated
// Create function name it accuSum
// value at index location added together
// Ex. [23, 32, -5, 20]
// to get index 1, I would summ ofnindex 0 + index 1 then index 1 plus index 2 and so on. ---> [23, 55, 50, 70]
// a) Create a test with expect statements for each of the variables provided.

describe("accuSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const accountTransactions1 = [100, -17, -23, -9];
//     // Expected output: [100, 83, 60, 51]

    const accountTransactions2 = [250, -89, 100, -96];
//     // Expected output: [250, 161, 261, 165]

    const accountTransactions3 = [];
//     // Expected output: []

    expect(accuSum(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(accuSum(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(accuSum(accountTransactions3)).toEqual([]);
  });
});

// Test Output:  ● accuSum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array
// ReferenceError: accuSum is not defined
const accountTransactions1 = [100, -17, -23, -9];
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96];
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = [];
// Expected output: []

// b) Create the function that makes the test pass.
const accountTransactions1[1] = accountTransactions1[0 + 1]
const accountTransactions2[1] = accountTransactions1[0 + 1]
const accountTransactions1[2] = accountTransactions1[1 + 2]
const accountTransactions2[2] = accountTransactions1[1 + 2]
const accountTransactions1 = accountTransactions1
function accuSum(array) {
  let result = accountTransactions1
  return result;
}

// I need further instruction on how to put a function together. for some reason I Understan what I have to do, but I don't fully know how to do it. I go blank everytime I need to make a function.
