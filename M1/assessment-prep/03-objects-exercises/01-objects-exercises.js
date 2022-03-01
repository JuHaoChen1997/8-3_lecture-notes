/**
 * 1
 * Write a function to return the keys of a  object.
 *
 * example output: name,sclass,rollno
 */
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function returnKeys(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }

  return arr.join(",");
}

console.log(returnKeys(student));

/**
 * 2
 * Write a function to delete the rollno property from the following object.
 * Print the object before AND after deleting the property.
 */

console.log(student);
deleteProperty(student);
console.log(student);
function deleteProperty(obj) {
  delete obj.rollno;
}

/**
 * 3
 *
 * Write a function to get the length of a  object.
 */
function getObjLength(obj) {
  let length = 0;
  for (let key in obj) {
    length++;
  }
  return length;
}

console.log(getObjLength(student));

/**
 * 4
 *
 * Write a  function to print the data or each book on a single line (i.e. display book name, author name and reading status) of the following books.
 */

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

print(library);
function print(arr) {
  for (let element of arr) {
    let str = `${element.title} ,${element.author} ,${element.readingStatus}\n`;
    console.log(str);
  }
}

/**
 * 5
 *
 * Write a function given the radius of a circle
 * to calculate and return the area and perimeter of a circle.
 *
 */
function circle(radius) {
  console.log(
    "area is: " +
      Math.PI * radius * radius +
      "perimeter is: " +
      2 * Math.PI * radius
  );
}

circle(1);

/**
 * 6
 * 
 * Write a  function to return a sorted array of objects by the libraryID
 * 
 * example output:
    [
      {
        author: "Bill Gates",
        libraryID: 1254,
        title: "The Road Ahead"
      },
      {
        author: "Suzanne Collins",
        libraryID: 3245,
        title: "Mockingjay: The Final Book of The Hunger Games"
      },
      {
        author: "Walter Isaacson",
        libraryID: 4264,
        title: "Steve Jobs"
      },
    ]
*/
let arr = [
  {
    author: "Bill Gates",
    libraryID: 12541,
    title: "The Road Ahead",
  },
  {
    author: "Suzanne Collins",
    libraryID: 3245,
    title: "Mockingjay: The Final Book of The Hunger Games",
  },
  {
    author: "Walter Isaacson",
    libraryID: 4264,
    title: "Steve Jobs",
  },
];

sortArray(arr);

function sortArray(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].libraryID > arr[j].libraryID) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);
}

/**
 * 7
 *
 * Write a  function to convert an object into a list of `[key, value]` pairs.
 */

const book = {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead",
};

convert(book);

function convert(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
    arr.push(obj[key]);
  }

  console.log(arr);
  return arr;
}

/**
 * 8
 * 
 * Write a  function to get a copy of the object
 * where the keys have become the values and the values the keys.
 * 
 * example output:
  {
    bill_gates: "author",
    1254: "libraryID",
    the_road_ahead: "title"
  };
 */
function flipKeyAndValue(obj) {
  let newObj = {};
  for (let key in obj) {
    console.log(key);
    newObj[obj[key]] = key;
  }
  return newObj;
}

let obj1 = {
  bill_gates: "author",
  1254: "libraryID",
  the_road_ahead: "title",
};

console.log(flipKeyAndValue(obj1));

/**
 * 9
 *
 * Write a  function to check whether an object contains given property.
 *
 */

function hasProperty(obj, property) {
  if (obj.hasOwnProperty(property)) {
    return true;
  } else {
    return false;
  }
}
