/**
 * 1. What is destructuring? Write a brief response below.
 */
// Allows you to pull array and object apart and declare multiple variables with let and const at once
/**
 * 2. Use destructuring to create three new variables from the following array.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const [first, second, third] = astronauts;

/**
 * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 */
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};

const { name, isActive, occupation } = astronaut;
console.log(name, isActive, occupation);

/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 *
 */

/**
 * 5. Apply destructuring to the following function.
 */
function getAstronautActivityStatus({ isActive }, { name }) {
  let result = "";
  if (isActive) {
    result = `${name} is active.`;
  } else {
    result = `${name} is not active.`;
  }
  return result;
}

const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};
getAstronautActivityStatus(astronaut, astronaut); //> "Jessica Watkins is active."
