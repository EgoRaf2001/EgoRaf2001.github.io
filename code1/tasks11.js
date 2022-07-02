function printFromOneToTen() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return arr;
}

console.log(printFromOneToTen()); //1 2 3 4 5 6 7 8 9 10

// -------------------------------------------

function printArray(arr) {
  const arr1 = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      arr1.push(arr[i][j]);
    }
  }
  return arr1;
}

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(printArray(arr)); //1 2 3 4 5 6

// -------------------------------------------

function printEvenNumbers(arr) {
  const evenNumbers = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

const numbers = [13, 23, 12, 45, 22, 48, 66, 100];

console.log(printEvenNumbers(numbers)); //12 22 48 66 100

// -------------------------------------------

function deleteElement(arr, ele) {
  const arr1 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== ele) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

let someArr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

console.log(deleteElement(someArr, 56)); //[23, 4, 78, 5, 63, 45, 210]

// -------------------------------------------

function printTriangle(range) {
  let line = 0;
  for (i = 1; i <= range; i++) {
    for (j = 1; j <= i; j++) {
      line += 1;
    }
   line+="\n";
  
  }
  return line
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
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr1 = [2, 45, 3, 67, 34, 567, 34, 345, 123];

console.log(findLargestNumberFromArray(arr1)); // 567

// -------------------------------------------

function findZeroCountInArray(arr) {
  const arr1 = [];
  const arr2 = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      arr1.push(arr[i][j]);
    }
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] === 0) {
      arr2.push(arr1[i]);
    }
  }
  return arr2.length + " zeros in given array";
}

const zerosExample = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
];

console.log(findZeroCountInArray(zerosExample)); // 5 zeros in given array

// -------------------------------------------

function fibonacci(n) {
  const fibArr = [0, 1];
  let num1 = 0;
  let num2 = 1;
  let num3;
  for (i = 2; i < n; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    fibArr.push(num3);
  }
  return fibArr;
}

console.log(fibonacci(8)); //0 1 1 2 3 5 8 13

// -------------------------------------------

function countLettersInWord(word) {
  return word.length + " letters in word " + word;
}

console.log(countLettersInWord("Edgar")); // 5 letters in word Edgar
console.log(countLettersInWord("Ani")); // 3 letters in word Edgar

// -------------------------------------------

function findDuplicatesInArray(arr) {
  const duplicates = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++)
      if (arr[i] === arr[j] && i !== j && ! duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
  }
  return  duplicates;
}

const arrayWithDuplicates = [4, 2, 34, 4, 1, 12, 1, 4];

console.log(findDuplicatesInArray(arrayWithDuplicates)); //[4, 1]
