const mySet = new Set([1, 2, 3]);
console.log(mySet); // prints the set containing 1, 2, 3

mySet.add(4); // adds 4 to the set
console.log(mySet); // prints the set after adding 4

mySet.delete(2); // removes 2 from the set
console.log(mySet); // prints the set after removing 2

console.log(mySet.has(3)); // checks if 3 is in the set, prints true
console.log(mySet.has(2)); // checks if 2 is in the set, prints false

console.log(mySet.size); // prints the number of elements in the set