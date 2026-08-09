const arr = [1, 2, 3, 4, 5];

console.log(arr); // prints the entire array
console.log(arr[0]); // prints the first element
console.log(arr[arr.length - 1]); // prints the last element

// iterating over the array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// using for...of loop
for (const element of arr) {
    console.log(element);
}

const newArr = new Array(5);
console.log(newArr); // prints an array with 5 empty slots

arr.push(6);
console.log(arr); // prints the array after adding a new element

arr.pop();
console.log(arr); // prints the array after removing the last element

arr.shift();
console.log(arr); // prints the array after removing the first element

arr.unshift(0);
console.log(arr); // prints the array after adding a new element at the beginning

const index = arr.indexOf(3); // finds the index of the element 3 in the array
console.log(index); // prints the index of the element 3 in the array

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
console.log(first, rest); // prints the first element and the rest of the array

// using spread to copy an array
const copiedArr = [...arr]; // creates a shallow copy of the array
console.log(copiedArr); // prints the copied array