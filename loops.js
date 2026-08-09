do {
    console.log("This will run at least once");
} while (false);

let x = 0; // initializing a variable for demonstration purposes

// while loop
while (x < 5) {
    console.log(`x = ${x}`);
    x++;
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`i*i = ${i*i}`);
}

const arr = [1, 2, 3, 4, 5]; // initializing an array for demonstration purposes

// for...of loop
for (const element of arr) {
    console.log(`element = ${element}`);
}

// enumerating array arr.entries()
for (const [index, element] of arr.entries()) {
    console.log(`index = ${index}, element = ${element}`);
}
