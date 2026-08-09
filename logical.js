console.log(true && false); // logical AND: false
console.log(true || false); // logical OR: true
console.log(!true); // logical NOT: false
console.log(true && !false); // logical AND with NOT: true

console.log("hello" || true); // logical OR with a string and a boolean: "hello"
console.log(false || "world"); // logical OR with a boolean and a string: "world"
console.log("" || false); // logical OR with an empty string and a boolean: false
console.log(null || "default"); // logical OR with null and a string: "default"

console.log(false && "hello"); // logical AND with a boolean and a string: false
console.log(true && "hello"); // logical AND with a boolean and a string: "hello"