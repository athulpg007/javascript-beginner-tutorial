# javascript-beginner-tutorial

This is a beginner-friendly tutorial for learning JavaScript. 

JavaScript is a versatile programming language primarily used for frontend web development. It allows you to create interactive and dynamic web pages.

You need Visual Studio Code or any other code editor to write JavaScript code. Install Node.js from [https://nodejs.org/](https://nodejs.org/) to run JavaScript code outside the browser. Verify node installation by running `node -v` in your terminal. Install npm (Node Package Manager) which comes with Node.js to manage JavaScript packages. Verify npm installation by running `npm -v` in your terminal.

A simple `hello-world.js` program:
```javascript
console.log("Hello, World!");
```
Run the program with:
```bash
node hello-world.js
```
Embed the `hello-world.js` script in an HTML file:
```
<script src="hello-world.js"></script>
```
Single-line comment:
```javascript
// This is a single-line comment
```
Multi-line comment:
```javascript
/*
 This is a multi-line comment
*/
```
Ways to print output in JavaScript:
```javascript
console.log("Hello, World!");
console.warn("This is a warning message!");
console.error("This is an error message!");
```

Declaring variables in JavaScript:
```javascript
let x = 10; // block-scoped variable
const y = 20; // block-scoped constant variable, immutable
var z = 30; // global or function scoped variable
```

Printing out a variable:
```javascript
const v = 64;
console.log(`V = ${v}`);
```
Initialize a npm project:
```bash
npm init -y
```
Install `prompt-sync` to accept user input.
```bash
npm install prompt-sync
```

Accept user input in your JavaScript file:
```javascript
const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log(`Hello, ${name}!`);
```

Data Types in JavaScript:

1. **Number**: Represents both integer and floating-point numbers.
```javascript
const num = 42;
const pi = 3.14;
```

2. **String**: Represents a sequence of characters.
```javascript
const name = "John";
const greeting = 'Hello';
```

3. **Boolean**: Represents `true` or `false`.
```javascript
const isTrue = true;
const isFalse = false;
```

4. **Undefined**: Represents a variable that has been declared but not assigned a value.
```javascript
let x;
console.log(x); // undefined
```

5. **Null**: Represents the intentional absence of any object value.
```javascript
const emptyValue = null;
```

6. **Object**: Represents a collection of key-value pairs.
```javascript
const person = {
    name: "John",
    age: 30
};
```

7. **Array**: Represents an ordered list of values.
```javascript
const numbers = [1, 2, 3, 4, 5];
```

8. **Symbol**: Represents a unique and immutable value.
```javascript
const uniqueId = Symbol("id");
```

9. **BigInt**: Represents integers with arbitrary precision.
```javascript
const bigNumber = 1234567890123456789012345678901234567890n;
```

Examining the type of variables using `typeof` operator:
```javascript
const x = 10;
const y = 3.14;
const z = "Hello";
const isTrue = true;
let d;
let e = null;
const f = {
    name: "John",
    age: 30,
};
const g = [1, 2, 3, 4, 5];
const i = 1234567890123456789012345678901234567890n;



console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof isTrue);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof i);
```

Variables in JavaScript can be declared using `var`, `let`, or `const`. Note variable names are case-sensitive and cannot start with a number. and convention is to use camelCase.
```javascript
var name = "Mike";
let age = 30;
const country = "USA"; // Constant variable, cannot be reassigned
```
`let` and `const` are block-scoped, while `var` is function-scoped.

Strings are immutable in JavaScript, meaning their values cannot be changed after they are created. Any operation that appears to modify a string actually creates a new string.

Arithmetic operators in JavaScript:
```javascript
const x = 5;
const y = 2;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus (remainder)
console.log(x ** y); // Exponentiation
console.log(x++); // post-increment: prints x then increments it
console.log(++x); // pre-increment: increments x then prints it
console.log(x--); // post-decrement: prints x then decrements it
console.log(--x); // pre-decrement: decrements x then prints it
console.log(x+=2); // addition assignment: adds 2 to x and prints the result
```

Implicit type coercion in JavaScript:
```javascript
const a = 1;
const b = "2";

console.log(a + b); // type coercion: number + string results in a string

const c = "123";
const d = 3;

console.log(c * d); // type coercion: string * number results in a number

const e = "hello";
const f = 2;

console.log(e - f); // type coercion: string - number results in NaN
```

Type conversion in JavaScript:
```javascript
const x = 42;
const y = "35.6";

console.log(x + y); // type coercion: number + string results in a string
console.log(x + Number(y)); // explicit type conversion

console.log(x + parseInt(y)); // explicit type conversion
console.log(x + parseFloat(y)); // explicit type conversion

console.log(String(x) + y); // explicit type conversion
console.log(x.toString() + y); // explicit type conversion
```

Comparison operators in JavaScript:
```javascript
console.log("1" == 1); // loose equality: true, because of type coercion
console.log("1" === 1); // strict equality: false, no type coercion

console.log(1 > 0); // greater than: true
console.log("1" > 0); // greater than: true
console.log(1 < 2); // less than: true
console.log("1" < 2); // less than: true
```

Logical operators in JavaScript:
```javascript
console.log(true && false); // logical AND: false
console.log(true || false); // logical OR: true
console.log(!true); // logical NOT: false
console.log(true && !false); // logical AND with NOT: true

console.log("hello" || true); // "hello"
console.log(false || "world"); // "world"
console.log("" || false); // false
console.log(null || "default"); // "default"

console.log(false && "hello"); // false
console.log(true && "hello"); // "hello"
```

Special values in JavaScript:
1. `undefined`: Represents a variable that has been declared but not assigned a value.
2. `null`: Represents the intentional absence of any object value.
3. `Infinity`: Represents positive infinity, a value greater than any other number.
4. `NaN`: "Not-a-Number", typically the result of an invalid arithmetic operation.

```javascript
const a = undefined;
console.log(a);

const b = null;
console.log(b);

const c = 5 / 0;
console.log(c);

const d = Math.sqrt(-1);
console.log(d);
```

Conditional statements in JavaScript:
```javascript
const condition = true;

if (condition) {
    console.log("This condition is true");
} else {
    console.log("This condition is false");
}

const num = 10;
if (Number(num) > 0) {
    console.log("The number is positive");
} else if (Number(num) === 0) {
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}

// Ternary operator example
const isPositive = Number(num) > 0 ? "positive" : "not positive";
console.log(isPositive);
```

Switch statement in JavaScript:
```javascript
const num = 1;

switch (num) {
    case 10:
        console.log("The number is 10");
        break;
    case 0:
        console.log("The number is zero");
        break;
    default:
        console.log("The number is something else");
        break;
}
```

Arrays in JavaScript:
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr); // prints the entire array
console.log(arr[0]); // prints the first element
console.log(arr[arr.length - 1]); // prints the last element

// adding an element to the end of the array
arr.push(6);
console.log(arr); // prints the array after adding a new element

// removing the last element from the array
arr.pop();
console.log(arr); // prints the array after removing the last element

// removing the first element from the array
arr.shift();
console.log(arr); // prints the array after removing the first element

// adding an element to the beginning of the array
arr.unshift(0);
console.log(arr); // prints the array after adding a new element at the beginning

// finding the index of an element in the array
const index = arr.indexOf(3); // finds the index of the element 3 in the array
console.log(index); // prints the index of the element 3 in the array

// finding the last index of an element in the array
const lastIndex = arr.lastIndexOf(3); // finds the last index of the element 3 in the array
console.log(lastIndex); // prints the last index of the element 3 in the array

// checking if an element exists in the array
const exists = arr.includes(3); // checks if the element 3 exists in the array
console.log(exists); // prints true if the element 3 exists, false otherwise

// concatenating arrays
const concatenatedArr = arr.concat([6, 7, 8]); // concatenates the current array with a new array
console.log(concatenatedArr); // prints the concatenated array

// join
const str = arr.join(", "); // joins the array elements into a string separated by commas
console.log(str); // prints the joined string

// slicing the array
const slicedArr = arr.slice(1, 4); // slices the array from index 1 to 3
console.log(slicedArr); // prints the sliced array

// splicing an array
const splicedArr = arr.splice(1, 2); // removes 2 elements starting from index 1
console.log(splicedArr); // prints the removed elements
console.log(arr); // prints the array after splicing

// destructuring an array
const [x, y] = [1, 2]; // destructuring the first two elements of the array
console.log(x, y);

// destructuring with the rest operator
const [first, ...rest] = [1, 2, 3, 4, 5]; // destructuring the first element and the rest of the array
console.log(first, rest);

// using spread to copy an array
const copiedArr = [...arr]; // creates a shallow copy of the array
console.log(copiedArr); // prints the copied array
```

A function to return next in line from an array:
```javascript
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

// Example usage of nextInLine function
const testArr = [1, 2, 3, 4, 5];
console.log(nextInLine(testArr, 6)); // prints 1
console.log(testArr); // prints [2, 3, 4, 5, 6]
```

Loops in JavaScript:
```javascript
do {
    console.log("This will run at least once");
} while (false);

// while loop
let x = 0;
while (x < 5) {
    console.log(`x = ${x}`);
    x++;
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`i*i = ${i*i}`);
}

// for...of loop
const arr = [1, 2, 3, 4, 5]; 
for (const element of arr) {
    console.log(`element = ${element}`);
}

// enumerating array arr.entries()
for (const [index, element] of arr.entries()) {
    console.log(`index = ${index}, element = ${element}`);
}
```

break and continue statements in JavaScript:
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break; // exits the loop when i is 2
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // skips the current iteration when i is 2
    }
    console.log(i);
}
```

Objects in JavaScript:
```javascript
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

obj.sayHello();
console.log(obj.name);
obj.name = "Alice";
obj.sayHello(); 
obj["name"] = "Bob"; 
obj.sayHello(); 

console.log(Object.values(obj)); 
console.log(Object.keys(obj)); 

//checking if a property exists in the object
console.log("name" in obj); // true
console.log("gender" in obj); // false

// use hasOwnProperty to check if a property exists in the object
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("gender")); // false

// for loop in obj
for (let key in obj) {
    console.log(`key = ${key}, value = ${obj[key]}`);
}
```

Classes in JavaScript:
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // getter
    get details() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    // setter
    set details(details) {
        const [name, age] = details.split(", ");
        this.name = name.split(": ")[1];
        this.age = parseInt(age.split(": ")[1]);
    }
};

const person1 = new Person("John", 30);
console.log(person1.details); // using the getter to access details

person1.details = "Name: Alice, Age: 25";
console.log(person1.details);
```

Sets in JavaScript:
```javascript
const mySet = new Set([1, 2, 3]);
console.log(mySet); // prints the set containing 1, 2, 3

mySet.add(4); // adds 4 to the set
console.log(mySet); // prints the set after adding 4

mySet.delete(2); // removes 2 from the set
console.log(mySet); // prints the set after removing 2

console.log(mySet.has(3)); // checks if 3 is in the set, prints true
console.log(mySet.has(2)); // checks if 2 is in the set, prints false

console.log(mySet.size); // prints the number of elements in the set
```

Maps in JavaScript:
```javascript
const myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);
console.log(myMap); // prints the map containing the key-value pairs

myMap.set("country", "USA"); // adds a new key-value pair to the map
console.log(myMap); 

myMap.delete("age"); // removes the key-value pair with key "age"
console.log(myMap); 

console.log(myMap.has("name")); 
console.log(myMap.has("age")); 

console.log(myMap.size);

// iterating over the map
for (const [key, value] of myMap.entries()) {
    console.log(`key = ${key}, value = ${value}`);
}
```

Functions in JavaScript:
```javascript
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

sayHello("John");
sayHello("Alice");

const greet = function(name) {
    console.log(`Hello, ${name}!`);
};
greet("John");
greet("Alice");

const arrowGreet = (name) => {
    console.log(`Hello, ${name}!`);
};
arrowGreet("John");
arrowGreet("Alice");

// rest parameter example to add multiple numbers
function addNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(addNumbers(1, 2, 3)); // prints 6
console.log(addNumbers(4, 5, 6, 7)); // prints 22
```
Random number generation in JavaScript:
```javascript
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage of generateRandomNumber function
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(5, 15));
console.log(generateRandomNumber(0, 100));
```

Map, Filter, and Reduce in JavaScript:
```javascript
const numbers = [1, 2, 3, 4, 5];

// map example: doubling each number in the array
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter example: getting all odd numbers from the array
const filtered = numbers.filter(num => num % 2 !== 0);
console.log(filtered);

// reduce example: summing all numbers in the array
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
```

Promises in JavaScript:
```javascript
const myPromise = new Promise((resolve, reject) => {
    // asynchronous operation simulation
    if (true) { // condition for successful operation
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

myPromise.then(
    result => {
        console.log(result);
    }
).catch(error => {
        console.log(error);
    }
).finally(
    () => {
        console.log("Promise has been settled (either resolved or rejected)");
    }
);
```

JavaScript essentials for React development
```javascript
// arrow functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// anonymous functions
const multiply = function(a, b) {
    return a * b;
};
```

ternary operator in JavaScript:
```javascript
const age = 18;
const canVote = age >= 18 ? true : false;
console.log(canVote); // prints true
```

JavaScript objects:
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// destructuring assignment from the person object
const { name, age, city } = person;
console.log(name, age, city);
```

map-filter-reduce in JavaScript:
```javascript
const numbers = [1, 2, 3, 4, 5];

// map example: doubling each number in the array
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter example: getting all odd numbers from the array
const filtered = numbers.filter(num => num % 2 !== 0);
console.log(filtered);

// reduce example: summing all numbers in the array
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
```

Promises in JavaScript in more detail:
```javascript
const event = new Promise((resolve, reject) => {
    const name = "Mike";
    if (name === "Mike") {
        resolve("OK");
    } else {
        reject("Error");
    }
});

event.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected)");
});
```
Example usage of the event promise with API:
```javascript
const axios = require("axios");

const data = axios.get("https://jsonplaceholder.typicode.com/posts/1");
data.then(response => {
    console.log(response.data);
}).catch(error => {
    console.error('Error fetching data:', error);
});
```

Async/Await with API in JavaScript:
```javascript
const axios = require("axios");

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        console.log("Finished attempting to fetch data.");
    }
};

getData();
```
    