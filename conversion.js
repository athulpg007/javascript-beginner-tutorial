const x = 42;
const y = "35.6";

console.log(x + y); // type coercion: number + string results in a string
console.log(x + Number(y)); // explicit type conversion: string to number

console.log(x + parseInt(y)); // explicit type conversion: string to integer
console.log(x + parseFloat(y)); // explicit type conversion: string to floating-point number

console.log(String(x) + y); // explicit type conversion: number to string
console.log(x.toString() + y); // explicit type conversion: number to string