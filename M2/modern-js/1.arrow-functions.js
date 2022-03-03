/**
 * 1. Convert the greet() function to use the arrow function syntax instead of the function declaration syntax.
 */
// function greet(name) {
//   let result = "";
//   if (name) {
//     result = `Welcome to NASA, ${name}!`;
//   } else {
//     result = "Welcome to NASA, space cadet!";
//   }
//   return result;
// }

// const greet = (name) => {
//   let result = "";
//   if (name) {
//     result = `Welcome to NASA, ${name}!`;
//   } else {
//     result = "Welcome to NASA, space cadet!";
//   }
//   return result;
// };

// console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
// greet(); //> "Welcome to NASA, space cadet!"

/**
 * 2. Try writing the greet() function above on a single line.
 * Hint...
 * .
 * .
 * .
 * .
 * (you may need to use a ternary operator and an implicit return)
 */

const greet = (name) =>
  name ? `Welcome to NASA, ${name}!` : "Welcome to NASA, space cadet!";

console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet()); //> "Welcome to NASA, space cadet!"

/**
 * 3. Are there any benefits to using the arrow function syntax? Are there any limitations? Write a brief response below.
 */
