// fetch something from JSON placeholder
// const data =fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));

// console.log(data);

const event = new Promise((resolve, reject) => {
    const name = "Mike";
    if (name === "Mike") {
        resolve("OK");
    } else {
        reject("Error");
    }
});

event.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected)");
});