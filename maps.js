const myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);
console.log(myMap); // prints the map containing the key-value pairs

myMap.set("country", "USA"); // adds a new key-value pair to the map
console.log(myMap); // prints the map after adding the new key-value pair

myMap.delete("age"); // removes the key-value pair with key "age"
console.log(myMap); // prints the map after removing the key-value pair

console.log(myMap.has("name")); // checks if the key "name" exists in the map, prints true
console.log(myMap.has("age")); // checks if the key "age" exists in the map, prints false

console.log(myMap.size); // prints the number of key-value pairs in the map

// iterating over the map
for (const [key, value] of myMap.entries()) {
    console.log(`key = ${key}, value = ${value}`);
}
