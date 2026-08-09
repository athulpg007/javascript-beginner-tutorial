const condition = true;

if (condition) {
    console.log("This condition is true");
}
else {
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

if (true) {
    console.log("This is always true");
}

// ternary operator
const isPositive = Number(num) > 0 ? "The number is positive" : "The number is not positive";
console.log(isPositive);