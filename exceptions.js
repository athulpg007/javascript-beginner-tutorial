try {
    const divisor = Number(0);

    if (divisor === 0) {
        throw new Error("Cannot divide by zero");
    }

    const myNumber = 10 / divisor;
    console.log(myNumber);
} catch (error) {
    console.error(`An error occurred: ${error.message}`);
}
