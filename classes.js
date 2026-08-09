class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // getter
    get details() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    // setter
    set details(details) {
        const [name, age] = details.split(", ");
        this.name = name.split(": ")[1];
        this.age = parseInt(age.split(": ")[1]);
    }
};

const person1 = new Person("John", 30);

// using the getter to access details
console.log(person1.details);

// using the setter to update details
person1.details = "Name: Alice, Age: 25";

// using the getter to access updated details
console.log(person1.details);
