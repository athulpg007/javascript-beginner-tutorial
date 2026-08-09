const myPromise = new Promise((resolve, reject) => {
    // asynchronous operation simulation
    if (true) { // condition for successful operation
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

myPromise.then(
    result => {
        console.log(result);
    }
).catch(error => {
        console.log(error);
    }
).finally(
    () => {
        console.log("Promise has been settled (either resolved or rejected)");
    }
);
