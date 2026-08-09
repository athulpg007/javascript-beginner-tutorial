const x = 5;
const y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// type coercion
const a = 1;
const b = "2";

console.log(a + b); // type coercion: number + string results in a string

const c = "123";
const d = 3;

console.log(c * d); // type coercion: string * number results in a number

const e = "hello";
const f = 2;

console.log(e - f); // type coercion: string - number results in NaN