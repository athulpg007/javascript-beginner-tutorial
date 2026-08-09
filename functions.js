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

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

// Example usage of nextInLine function
const testArr = [1, 2, 3, 4, 5];
console.log(nextInLine(testArr, 6)); // prints 1
console.log(testArr); // prints [2, 3, 4, 5, 6]
