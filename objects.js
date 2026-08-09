const obj = {
    name: "John",
    age: 30,
    city: "New York",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

obj.sayHello(); // calling the sayHello method of the object
console.log(obj.name); // accessing the name property of the object
obj.name = "Alice";
obj.sayHello(); // calling the sayHello method again after changing the name
obj["name"] = "Bob"; // changing the name property using bracket notation
obj.sayHello(); // calling the sayHello method again after changing the name using bracket notation

console.log(Object.values(obj)); // prints all the values of the object properties
console.log(Object.keys(obj)); // prints all the keys of the object properties


//checking if a property exists in the object
console.log("name" in obj); // true
console.log("gender" in obj); // false

// use hasOwnProperty to check if a property exists in the object
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("gender")); // false

// for loop in obj
for (let key in obj) {
    console.log(`key = ${key}, value = ${obj[key]}`);
}

// destructuring assignment
const { name, age, city } = obj;
console.log(name, age, city);