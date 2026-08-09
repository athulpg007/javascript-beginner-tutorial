function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage of generateRandomNumber function
console.log(generateRandomNumber(1, 10)); // prints a random number between 1 and 10
console.log(generateRandomNumber(5, 15)); // prints a random number between 5 and 15
console.log(generateRandomNumber(0, 100)); // prints a random number between 0 and 100