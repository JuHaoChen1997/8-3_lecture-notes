/**
 * EXERCISE 1
 *
 * Get the sum of the elements of two arrays.
 * Each array includes only integer numbers.
 *
 * Example output:
 * 276 + 351 = 627
 */

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

let sum1 = 0;
let sum2 = 0;

for (let element of arr_1) {
  sum1 += element;
}

for (let element of arr_2) {
  sum2 += element;
}

console.log(sum1 + sum2);

/**
 * EXERCISE 2
 *
 * Using a for loop print all even numbers up to and including n.
 * Don’t include 0.
 *
 *  Print each item on a new line
 *
 * Example output:
 * 2
 * 4
 * 6
 * 8
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 * 22
 */
let n1 = 22;
for (let i = 1; i <= n1; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/**
 * EXERCISE 3
 *
 * Using a for loop output the elements in reverse order
 * with each item on a new line
 *
 * Example output:
 * true
 * 3
 * be
 * false
 * cannot
 * true
 * 9
 * what
 * 43
 *
 */
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

/**
 * EXERCISE 4
 *
 * Given two arrays of integers, add up each element in the same position
 * and create a new array containing the sum of each pair.
 * Assume both arrays are of the same length.
 *
 * Example output:
 * [12, 7, 16]
 *
 */
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let newArr1 = [];

for (let i = 0; i < arr_3.length; i++) {
  newArr1.push(arr_3[i] + arr_4[i]);
}

console.log(newArr1);

/**
 * EXERCISE 5
 * Given a string change the every second letter to an uppercase ‘Z’.
 * Assume there are no spaces.
 *
 * Example output:
 * jZvZsZrZpZ OR each letter on a new line
 *
 * HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
 */
let str1 = "javascript";
for (let i = 0; i < str1.length; i++) {
  if ((i + 1) % 2 === 0) {
    str1 = str1.replace(str1.charAt(i), "Z");
  }
}

console.log(str1);

/**
 * EXERCISE 6
 * Check if a string contains the letter “y”. Print “yes” if it does and “no”
 * if it does not.
 *
 * Example output:
 * yes
 */

let str2 = `don't know why`;
if (str2.includes("y")) {
  console.log("yes");
} else {
  console.log("no");
}

/**
 * EXERCISE 7
 *
 * Given a number n, calculate the factorial of the number
 *
 * EXAMPLE input: 4, output: 24
 */

let n2 = 4; //  4 * 3 * 2 * 1 = 24
let factorial = 1;
for (let i = n2; i >= 1; i--) {
  factorial *= i;
}

console.log(factorial);

/**
 * EXERCISE 8
 *
 * Write a program that will allow someone to guess a four digit pin
 * exactly 4 times. If the user guesses the number correctly.
 * It prints “That was correct!”
 *
 * Otherwise it will print “Sorry that was wrong.”
 *
 * Program stops after the 4th attempt of if they got it right.
 *
 * Example output:
 * Please make your guess:
 * 4544
 * Sorry that was wrong.
 * Please make your guess:
 * 4444
 * Sorry that was wrong.
 * Please make your guess:
 * 0704
 * That was correct!
 */
// let pin = 0704;
// for (let i = 0; i < 4; i++) {
//   let input = prompt("Please make your guess:");
//   if (pin === Number(input)) {
//     console.log("That was correct!");
//   } else {
//     console.log("Please make your guess:");
//   }
// }

/** EXERCISE 9
 *
 * Write a program that will check if two strings are palindromes.
 * A palindrome is a word that spells the same forward and backward.
 * Palindrome: a word, phrase, or sequence that reads the same backward as
 * forward, e.g., madam or nurses run.
 *
 * Example output:
 * string1 palindrome?: Yes
 * string2 palindrome?: No
 */

let str3 = "racecar";
let str4 = "Java";

console.log(palindromeTest(str3));
console.log(palindromeTest(str4));

function palindromeTest(str) {
  let arr1 = str.split("");
  let arr2 = str.split("").reverse();

  console.log(arr1, arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * EXERCISE 10
 *
 * Write a program that finds the summation of every number from 1 to num.
 * The number will always be a positive integer greater than 0.
 *
 * EXAMPLE:
 * input: 2, 8
 * output: 36
 *
 * 1 + 2 = 3
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
 */

let num1 = 2;
let num2 = 8;

let sum = 0;
for (let i = 1; i <= num2; i++) {
  sum += i;
}
console.log(sum);
