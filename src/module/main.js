import "./todo";
import "./signIn";
import { toggleTheme } from "./theme";

// remove duplicates from array
const arr = [1, 2, 3, 3, 2, 1, 4, 5, 6, 1, 3];

const filterArr = arr.filter(function (item, index) {
  return arr.indexOf(item) === index;
});
console.log(filterArr);

// -------------------------------------------

function printFromOneToTen() {
  return new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
console.log(printFromOneToTen()); //1 2 3 4 5 6 7 8 9 10

// -------------------------------------------

function printArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(b);
  });
}

const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(printArray(arr1)); //1 2 3 4 5 6

// -------------------------------------------

function printEvenNumbers(arr) {
  const evenNumbers = [];
  let i2 = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers[i2] = arr[i];
      i2 += 1;
    }
  }
  return evenNumbers;
}

const numbers = [13, 23, 12, 45, 22, 48, 66, 100];

console.log(printEvenNumbers(numbers)); //12 22 48 66 100

// -------------------------------------------

function deleteElement(arr, ele) {
  const filterArr = arr.filter(function (val) {
    if (val != ele) {
      return arr;
    }
  });
  return filterArr;
}
let someArr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

console.log(deleteElement(someArr, 56)); //[23, 4, 78, 5, 63, 45, 210]

// -------------------------------------------

function printTriangle(range) {
  // debugger;
  let line = 0;
  for (i = 1; i <= range; i++) {
    for (a = 1; a <= i; a++) {
      line += 1;
    }
    line += "\n";
  }
  return line;
}

console.log(printTriangle(8));

/* 1 
     1 2 
     1 2 3 
     1 2 3 4 
     1 2 3 4 5 
     1 2 3 4 5 6 
     1 2 3 4 5 6 7 
     1 2 3 4 5 6 7 8 */

// -------------------------------------------

function findLargestNumberFromArray(arr) {
  return Math.max.apply(null, arr);
}

const arr2 = [2, 45, 3, 67, 34, 567, 34, 345, 123];

console.log(findLargestNumberFromArray(arr2)); // 567

// -------------------------------------------

function findZeroCountInArray(arr) {
  const concatArr = arr.reduce(function (a, b) {
    return a.concat(b);
  });
  const zerosArr = [];
  concatArr.forEach((ele) => {
    if (ele === 0) {
      zerosArr.push(ele);
    }
  });
  zeros = zerosArr.length;
  const findZeros = zeros + " zeros in given array";
  return findZeros;
}

const zerosExample = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
];

console.log(findZeroCountInArray(zerosExample)); // 5 zeros in given array

// -------------------------------------------

function fibonacci(n) {
  const fibArray = [0, 1];
  let number1 = 0;
  let number2 = 1;
  let nextNumber;
  for (let i = 3; i <= n; i++) {
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
    fibArray.push(nextNumber);
  }
  return fibArray;
}

console.log(fibonacci(8)); //0 1 1 2 3 5 8 13

// -------------------------------------------

function countLettersInWord(word) {
  const countsLetters = word.length;
  const nameLetters = countsLetters + " letters in word " + word;
  return nameLetters;
}

console.log(countLettersInWord("Edgar")); // 5 letters in word Edgar
console.log(countLettersInWord("Ani")); // 3 letters in word Edgar

// -------------------------------------------
function findDuplicatesInArray(arr) {
    const duplicatesArr = arr.filter(function (item, index) {
        return arr.indexOf(item) !== index;
      });
     const filterArr = duplicatesArr.filter(function (item, index) {
        return duplicatesArr.indexOf(item) === index;
      });

      return filterArr
    }
const arrayWithDuplicates = [4, 2, 34, 4, 1, 12, 1, 4];

console.log(findDuplicatesInArray(arrayWithDuplicates)); //[4, 1]
