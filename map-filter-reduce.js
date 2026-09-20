const numbers = [1, 2, 3, 4, 5];

// for each
console.log("Using forEach to print each number:");
numbers.forEach(num => console.log(num));

// map example: doubling each number in the array
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const users = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
];

// map example: extracting names from an array of user objects
const names = users.map(user => user.name);
console.log(names);

// reduce example: summing all numbers in the array
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// filter example: getting all odd numbers from the array
const filtered = numbers.filter(num => num % 2 !== 0);
console.log(filtered);
